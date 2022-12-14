import styled from "styled-components";

const ButtonStyle = styled.div`
  .button {
    background: none;
    border: 1px solid ${(props) => props.theme.accent};
    border-radius: 28px;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    font-size: 1.2rem;
    padding: 5px 20px;
    transition: all 0.3s ease;
  }

  .button:hover {
    background: ${(props) => props.theme.accent};
  }

  @media (max-width: 768px) {
    .button {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .button {
      margin: 0 10px;
      font-size: 14px;
    }
  }
`;

export default ButtonStyle;
