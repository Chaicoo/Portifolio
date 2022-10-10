import styled from "styled-components";

const TerminalStyle = styled.div`
  #bar {
    text-align: center;
    width: 550px;
    height: 25px;
    background-color: #dad9d9;
    margin: 0 auto;
    font-family: monospace;
    padding: auto;
    float: none;
    border-radius: 5px 5px 0 0;
  }

  #red {
    background-color: #e94b35;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    right: -47%;
    bottom: -20%;
    position: relative;
  }

  #yellow {
    background-color: #f0f000;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    right: -44%;
    bottom: 40%;
    position: relative;
    display: block;
  }

  #green {
    background-color: #1aaf5c;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    right: -41%;
    bottom: 99%;
    position: relative;
    display: block;
  }

  #screen {
    background-color: #33485e;
    width: 550px;
    height: 350px;
    border-radius: 0 0 5px 5px;
    margin: 0 auto;
    padding: 1px;
  }

  .font {
    color: #fff;
    font-family: monospace;
    font-size: 20px;
    text-align: left;
    position: static;
  }

  .font span {
    color: #0592ca;
  }

  @media (max-width: 768px) {
    #bar {
      width: 370px;
    }

    #screen {
      width: 370px;
      height: 200px;
    }

    .font {
      font-size: 15px;
    }

    #red {
      right: -46%;
    }

    #yellow {
      right: -41%;
    }

    #green {
      right: -36%;
    }

  }
`;

export default TerminalStyle;
