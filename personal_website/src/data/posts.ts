import type { ReactNode } from "react";
import OnMechanisticInterpretability from "./posts/on-mechanistic-interpretability";
import QualiaAndConsciousness from "./posts/qualia-and-consciousness";
import PapersOnLlmPersonas from "./posts/papers-on-llm-personas";

export interface Post {
    slug: string;
    title: string;
    date: string;
    content: ReactNode;
}

export const posts: Post[] = [
    {
        slug: "papers-on-llm-personas",
        title: "Papers on LLM Personas",
        date: "2026-02-15",
        content: PapersOnLlmPersonas(),
    },
];
