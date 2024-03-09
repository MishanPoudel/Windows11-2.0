import Explorer from "./components/Explorer";
import RightClick from "./components/RightClick";

function App() {
  return (
    <>
      <div className="h-screen">
        <RightClick />
      <div className="absolute left-[28rem] top-40">
        <Explorer />
      </div>
      </div>
    </>
  );
}

export default App;
