import Container from "./components/Container";
import RightClick from "./components/RightClick";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="h-screen">
        <RightClick/>
      </div>
      <div className="absolute left-0 top-0 mx-auto p-8">
      <Title>
        <Container/>
      </Title>
    </div>
    </>
  );
}

export default App;