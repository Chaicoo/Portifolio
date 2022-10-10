import styled from "styled-components";

const HomeStyle = styled.div`
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10%;
  }

  .containerTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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

  .containerButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
  }

  .containerButtons .buttonLink {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.text};
    border: none;
    border-radius: 28px;
    padding: 10px 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-right: 30px;
    text-decoration: none;
    &:hover {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.accent};
    }
  }

  .containerButtons .button:hover {
    color: ${(props) => props.theme.text};
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
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .about .aboutContent img {
    width: 400px;
    border-radius: 50%;
    margin-right: 70px;
    padding: 3px;
    border: 3px solid ${(props) => props.theme.accent};
  }

  .about p {
    color: ${(props) => props.theme.secundaryText};
    font-size: 25px;
    text-align: justify;
  }

  .skills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10%;
    width: 100%;
    height: 660px;
    text-align: center;
    background-image: url(${(props) => props.theme.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }

  .skills h2 {
    color: ${(props) => props.theme.accent};
    font-size: 60px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  .skills .containerSkills {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 5%;
  }

  .projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15%;
    width: 100%;
    text-align: center;
  }

  .projects h2 {
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
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    header {
      height: 100vh;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 0;
    }

    .containerTitle {
      margin-top: 10px;
      align-items: center;
      margin-bottom: -130px;
    }

    .containerTitle h1 {
      font-size: 50px;
      text-align: center;
    }

    .containerTitle .text {
      font-size: 20px;
      text-align: justify;
    }

    .containerTitle .buttonTheme {
      font-size: 35px;
    }

    .containerButtons {
      align-items: center;
      margin-top: 15px;
      margin-bottom: 0;
    }

    .terminal {
      width: 370px;
      height: 200px;
    }

    main {
      margin-top: 20px;
    }

    .about {
      margin-top: 10px;
    }

    .about h2 {
      font-size: 50px;
    }

    .about .aboutContent {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .about .aboutContent img {
      width: 300px;
      margin-right: 0;
    }

    .about p {
      font-size: 18px;
    }

    .skills {
      margin-top: 40px;
      height: 900px;
    }

    .skills h2 {
      font-size: 50px;
    }

    .skills .containerSkills {
      margin-top: 10px;
    }

    .projects {
      margin-top: 40px;
    }

    .projects h2 {
      font-size: 50px;
    }

    footer {
      margin-top: 40px;
      height: 200px;
    }

    .linksOnpage {
      margin-top: 20px;
    }

    .linksOnpage li {
      margin: 0 20px;
    }

    .linksOnpage li a {
      font-size: 18px;
    }

    .socialMedia {
      margin-top: 15px;
    }

    .socialMedia a {
      margin: 0 20px;
    }

    .copyRight {
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

export default HomeStyle;
