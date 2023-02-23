import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 as style } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function Codeblock({ code }) {
  return (
    <div className="text-[11px] sm:text-base flex">
      <div className="flex flex-col sm:gap-1 text-gray-500 p-1 sm:p-3 text-sm">
        {Array.from(Array(code.split("\n").length)).map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={style}
        lineProps={{
          style: {
            wordBreak: "break-all",
            whiteSpace: "pre-wrap",
          },
        }}
        wrapLines={true}
        customStyle={{ backgroundColor: "transparent", overflowX: "hidden" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Codeblock;
