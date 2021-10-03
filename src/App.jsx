import styled from "styled-components";
import Markdown from "./components/Markdown";

const App = () => {
  return (
    <Container>
      <Markdown />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App;
