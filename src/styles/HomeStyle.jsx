import styled from "styled-components";

const HomeStyle = styled.div`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10%;
  }

  .containerTitle {
    align-items: center;
    box-sizing: content-box;
  }

  .containerTitle .buttonTheme {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 50px;
    color: ${(props) => props.theme.text};
    margin-left: 10px;
  }

  .containerTitle button:hover {
    color: ${(props) => props.theme.accent};
  }

  .containerTitle h1 {
    color: ${(props) => props.theme.titles};
    font-size: 60px;
    font-weight: 700;
    justify-content: center;
    margin: 0;
    padding: 0;
    align-items: center;
    text-align: left;
  }

  .titleSecondary {
    color: ${(props) => props.theme.accent};
  }

  .containerTitle .text {
    color: ${(props) => props.theme.secundaryText};
    font-size: 30px;
    text-align: left;
  }

  .accent {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.text};
    height: 30px;
  }

  .terminal {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about {
    text-align: center;
  }

  .about h2 {
    color: ${(props) => props.theme.accent};
    font-size: 60px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  .about .aboutContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .about .aboutContent img {
    width: 400px;
    border-radius: 50%;
    margin-right: 70px;
    padding: 3px;
    border: 3px solid ${(props) => props.theme.accent};
    @media (max-width: 768px) {
      width: 300px;
      margin-right: 0;
    }
  }

  .about p {
    color: ${(props) => props.theme.secundaryText};
    font-size: 25px;
    text-align: justify;
    @media (max-width: 768px) {
      width: 300px;
    }
  }

  .skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10%;
    width: 100%;
    text-align: center;
  }

  .skills h2 {
    color: ${(props) => props.theme.accent};
    font-size: 60px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 15%;
    background-color: ${(props) => props.theme.backgroundFooter};
    padding: 10px;
    width: 100%;
    height: 300px;
  }

  .linksOnpage {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin-top: 40px;
  }

  .linksOnpage li {
    display: inline;
    margin: 0 40px;
  }

  .linksOnpage li a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
    font-size: 20px;
  }

  .linksOnpage li a:hover {
    color: ${(props) => props.theme.accent};
  }

  .socialMedia {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }

  .socialMedia a {
    display: inline;
    margin: 0 40px;
    color: ${(props) => props.theme.text};
    text-decoration: none;
    font-size: 25px;
  }

  .socialMedia a:hover {
    color: ${(props) => props.theme.accent};
  }

  .copyRight {
    color: ${(props) => props.theme.secundaryText};
    font-size: 20px;
    padding-bottom: 30px;
  }

  .Cursor {
    color: transparent;
  }

  @media (max-width: 768px) {
    header {
      flex-direction: column;
      margin-top: 30%;
    }
  }
`;

export default HomeStyle;
