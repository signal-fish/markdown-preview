import styled from "styled-components";
import { useState } from "react";
import {tablet} from '../../responsive'

const Markdown = () => {
  const [markdown, setMarkdown] = useState('# Hello, Signal Fish!')

  const handleChange = (e) => {
    e.preventDefault()
    setMarkdown(e.target.value);
    const elem = document.getElementById("data");
    elem.scrollTop = elem.scrollHeight;
  }
  return (
    <Container>
      <Input>
        <Textarea
          value={markdown}
          onChange={(e) => handleChange(e)}
        ></Textarea>
      </Input>
      <Display>
        <DisplayContent id="data">{markdown}</DisplayContent>
      </Display>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${tablet({
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(2, 1fr)"
  })}
`;

const Input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Textarea = styled.textarea`
  width: 80%;
  height: 85%;
  margin: 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 20px;
  font-size: 20px;
  font-family: "Poppins" !important;
  
  ${tablet({
    height: "70%",
  })}
`;

const Display = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  scroll-behavior: smooth;
`;

const DisplayContent = styled.p`
  width: 80%;
  height: 85%;
  margin: 20px;
  padding: 20px;
  font-size: 20px;
  overflow: scroll;
  
  ${tablet({
    height: "70%",
  })}
`;

export default Markdown;
