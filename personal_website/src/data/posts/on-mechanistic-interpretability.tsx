import { InlineMath, BlockMath } from "../../components/Latex";

const Content = () => (
    <>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
        </p>

        <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>

        <p>
            The <strong>key insight</strong> behind mechanistic interpretability
            is that we can decompose a neural network's computation into
            understandable circuits. For a given input{" "}
            <InlineMath math="x" />, the network computes:
        </p>

        <BlockMath math="f(x) = W_n \sigma(W_{n-1} \sigma(\cdots \sigma(W_1 x + b_1) \cdots) + b_{n-1}) + b_n" />

        <p>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
            varius, turpis et commodo pharetra, est eros bibendum elit, nec
            luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
            euismod gravida.
        </p>
    </>
);

export default Content;
