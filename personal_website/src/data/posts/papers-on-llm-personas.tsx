import { InlineMath } from "../../components/Latex";

const Content = () => (
    <>
        <p>
            LLM personas simulate individual human behavior and higher order social interactions using language models. I took a look at some
            important papers in the field - notes attached below.
        </p>

        <h3> <strong>Generative Agents: Interactive Simulacra of Human Behavior</strong> </h3>
        <p>
            Influential paper by Joon Sung Park et al. that lays out the foundation for simulating human behavior using LLMs. Published in 2023, so a while ago.
        </p>

        <p>
            The main takeaway is that relatively simple architectures can model complex emergent social behavior. 
            The paper starts by noting that in order to simulate humans, agents must be able to remember, reason about their memories, and use that reasoning to 
            make a plan of action. Prior work was either deterministic or needed definable rewards for RL.
        </p>

        <p> 
            Instead, the authors equipped LLMs with a "long-term memory module" that allows the agents to store and retrieve
            memories based on their relevance, importance, and recency. They also built in the ability to reflect and create plans,
            forming new memories which were then fed back into the memory module.
        </p>

        <p>
            <strong>Technical details of the architecture:</strong> "Recency" was implemented using an exponential decay function that suppressed older memories 
            (but not by too much - the decay factor used was 0.995). "Importance" was rated by an LLM judge. "Relevance" was calculated
            using the cosine similarity between the embeddings of the query memory and the other memory items. Everything was then normalized using min-max scaling, and a 
            retrieval score was computed using a weighted sum of three scores above.
        </p>

        <p>
             Once the importance score of the past <InlineMath math="k" /> memories reached a certain threshold, the agent would trigger 
             <strong> reflection.</strong> Given all the memories in the context so far, another LLM would first generate three relevant questions
             to ask about the memories and then find candidate memories to answer those questions. Another LLM would summarize insights
             from the candidate memories and feed them back to the agent as new memories. 
        </p>

        <p>
            Not sure why the reflection process was so convoluted. Perhaps repeated passes through helper LLMs enabled better
            abstraction/generalization over otherwise concrete memories. 
        </p>

        <p>
            <strong>Planning</strong> involved setting start and end times for a set of actions, and recursively assigning actions to time slots
            until every 5-15 minute chunk was assigned an action. Agents could also update plans based on the environment. 
        </p>
        
        <p>
            Finally, agents could <strong>communicate</strong> using relevant memories from the memory module with context from the current
            conversation. 
        </p>

        <p>
            <strong>Results:</strong> The authors evaluated the agents based on their believability, as judged by human volunteers.
            A couple surprising results - generative agents with full capabilities were about 8 standard deviations more believable
            than agents without the ability to store, reflect or plan using memories (i.e. SOTA before this paper).
        </p>
        <p>
            Second, individual components were highly influential too - ablating reflections zapped believability by a few standard
            deviations, which wasn't something I would have expected. 
        </p>
        
        <h3> <strong>Generative Agent Simulations of 1,000 People</strong> </h3>
        <p>
            <strong>Overview:</strong> Follow up to the above paper. The authors had agents interview people for two hours, gain info, and then take a survey immediately after + another interview 2 weeks later.
            They compared the agent results with normalized (i.e. accounting for people slightly changing their answers over time) people results to see how well they match.
            Questions were taken from the GSS survey + a Big-5 battery + established economic games.
        </p>
        <p>
            Two major <strong>takeaways</strong> - first, the fundamental generative agent architecture scaled very well. This paper also utilized
            expert reflections (where an LLM adopted personas of psychologists/economists/etc. to extract insights from candidate interviews).
            Second, agent interviews were surprisingly efficient at extracting info, esp. when compared to surveys. Could be because
            the interview script (taken from the American Voices Project) was really good, but nevertheless worth looking into.
        </p>
        <h3> <strong>Persona Vectors: Monitoring and Controlling Character Traits in Language Models</strong> </h3>
        <p>
            This time a paper by Anthropic! They isolated persona vectors and used that to manipulate LLM behavior. The whole paper
            basically follows from the linear representation hypothesis. The authors created an automated pipeline to isolate
            "persona vectors" through differences in activations given a natural language prompt. 
        </p>
        <p>
            Then they performed a bunch of experiments. Adding persona vectors made the model show the trait; subtracting them made
            the model suppress the trait (pretty high correlation based on Anthropic's data). They also found that projecting tokens onto 
            the persona vector helped identify whether those tokens encouraged/discouraged the trait.
        </p>
        <p>
            A couple more interesting results - first, certain traits could be inhibited during fine-tuning by <strong>adding </strong>
            the persona vector to the activations, so that the model would never need to learn that trait on its own. These vectors
            could then be disabled during inference (by e.g. ablating the LoRA adapters). This technique had little to no effect on
            the model's performance on unrelated tasks, even those learned during fine-tuning. Two caveats: the traits could still show up
            depending on how present it was in the dataset; using a naive approach like regularization doesn't work because the model just
            learns to represent the undesirable traits in another direction of the activation space.
        </p>
        <p>
            Second, the authors found that you can predict how much a model changes based on given training data by projecting both
            the data and the model's natural responses onto the persona direction and then taking the difference. 
        </p>
        <p>
            These results could be very useful for building more believable personas. For instance, an agent could take in a natural
            language description of a specific persona, use Anthropic's pipeline to isolate a persona vector, and then inject
            that vector into the base LLM. Anthropic isolated a couple ways to make this process faster, should look into that.
        </p>

        <h3> <strong>Emergent Introspective Awareness in Large Language Models</strong> </h3>
        <p>
            Another Anthropic paper. Introspection is the ability to observe and reason about one's own thoughts. 
            At a high level, the authors tested two things: first, can models track changes to their own internal states? 
            Second, can models influence those internal states? They correctly note that detecting genuine introspection is 
            hard because you must distinguish between metacognition and more surface-level reasoning (e.g. thinking about 
            "thinking about love" is distinct from thinking about the word "love"). 
        </p>
        <p>
            <strong>Main takeaway:</strong> At the very least, some models have the ability to sometimes recognize what they're
            thinking about, even if not explicitly prompted to do so. Of course this doesn't imply full introspection like in humans,
            but it demonstrates some kernel of this reasoning being possible. The authors run a battery of different experiments, each 
            with their own "boring but likely to be correct" mechanistic explanations.
        </p>
        <p>
            A model may detect introspection because it has allocated some neurons to detect anomalous changes in its activations; it's unclear
            why the model would've learned to do this given that training doesn't involve activation steering. For the distinguishing
            thoughts from text experiment, the model probably just learned a way to choose what heads it uses for certain tasks - very useful
            for many reasoning/roleplay tasks. For the thinking about a concept experiment - the model probably uses a tagging mechanism
            to increase attention to specific tokens when instructed to; performance on the task doesn't deteriorate because the model
            is confident about the correct answer. 
        </p>
        <p>
            Basically there are a bunch of simple explanations for the experimental results, but the authors have shown that 
            models have some semblance of the ability to introspect. They note that introspection could be trained via 
            fine-tuning or in-context learning, which would be very useful for building more believable personas (esp. given
            the results of the generative agents paper).
        </p>
        <h3> <strong>HumanLLM: Benchmarking and Improving LLM Anthropomorphism via Human Cognitive Patterns</strong> </h3>
        <p>
            Didn't really look into this paper too much, but the main takeaway is that SOTA for behavioral simulation is still
            basically just a mix of prompting, fine-tuning, and activation steering. Need to do more research to see if people
            have innovated on the generative agent architecture from the Park et al. paper. 
        </p>
    </>
);

export default Content;
