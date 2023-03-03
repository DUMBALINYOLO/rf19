import "./styles.css";
import { g } from "./dfs";
import ForceGraph2D from "react-force-graph-2d";
export default function App() {
  function genRandomTree(N = 1000, reverse = false) {
    return {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          [reverse ? "target" : "source"]: id,
          [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
        }))
    };
  }
  const myData = {
    nodes: [
      { id: "anil" },
      { id: "aman" },
      { id: "darren" },
      { id: "raghav" },
      { id: "bhabani" },
      { id: "sakshi" }
    ],
    links: [
      { source: "anil", target: "sakshi" },
      { source: "anil", target: "sakshi" },
      { source: "anil", target: "sakshi" }
    ]
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ForceGraph2D
        graphData={genRandomTree(1000)}
        nodeLabel="id"
        nodeRelSize={6}
        linkDirectionalArrowLength={3.5}
        linkDirectionalArrowRelPos={1}
        nodeCanvasObjectMode={() => "after"}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "black"; //node.color;
          ctx.fillText(label, node.x, node.y, node.id + 10);
        }}
        // linkCurvature={0.25}
      />
    </div>
  );
}
