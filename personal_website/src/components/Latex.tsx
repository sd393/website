import katex from "katex";
import "katex/dist/katex.min.css";

export const InlineMath = ({ math }: { math: string }) => (
    <span
        dangerouslySetInnerHTML={{
            __html: katex.renderToString(math, { throwOnError: false }),
        }}
    />
);

export const BlockMath = ({ math }: { math: string }) => (
    <div
        dangerouslySetInnerHTML={{
            __html: katex.renderToString(math, {
                throwOnError: false,
                displayMode: true,
            }),
        }}
    />
);
