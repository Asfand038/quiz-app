import styled, { createGlobalStyle } from "styled-components";
import image from "./images/nattu-adnan.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${image});
    background-size: cover;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Fascinate Inline";
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    color: rgb(135, 241, 255);
  }
  .startBtn {
    cursor: pointer;
    background: linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145));
    border: 2px solid rgb(211, 133, 88);
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0px 40px;
  }
  .spinner {
    width: 100%;
    height: 100%;
  }

  .spinner > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .next,
  .submit {
    cursor: pointer;
    background: linear-gradient(rgb(255, 255, 255), rgb(255, 204, 145));
    border: 2px solid rgb(211, 133, 88);
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
    border-radius: 10px;
    height: 40px;
    margin: 20px 0px;
    padding: 0px 40px;
  }

  .submit {
    border: 2px solid #03254c;
    background: linear-gradient(rgb(255, 255, 255), #296d98);
  }
`;
