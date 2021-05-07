import styled from "styled-components";

export const QuestionCardLayout = styled.div`
  text-align: center;

  & > p:first-child {
    color: rgb(255, 255, 255);
    font-size: 2rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    background: rgb(235, 254, 255);
    border-radius: 10px;
    border: 2px solid rgb(0, 133, 163);
    padding: 20px;
    box-shadow: rgb(0 0 0 / 25%) 0px 5px 10px;
    text-align: center;
    p {
      margin-bottom: 20px;
    }
  }
`;

interface ButtonProps {
  answered: boolean;
  isCorrect: boolean;
  disabled: boolean;
}
export const ButtonWrapper = styled.div<ButtonProps>`
  button {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ isCorrect, answered }) =>
      isCorrect
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : !isCorrect && answered
        ? "linear-gradient(90deg, #ff5656, #c16868)"
        : "linear-gradient(90deg, #56ccff, #6eafb4)"};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
