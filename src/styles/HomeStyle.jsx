import styled from "styled-components";

const HomeStyle = styled.div`
  nav{
    height: 4.5rem;
    background-color: transparent;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    backdrop-filter: blur( 30px );
    border-bottom: 1px solid ${(props) => props.theme.accent};
  }
  
  .navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 60%;
    margin: 0 auto;
    height: 100%;
  }

  .navbar .buttonTheme {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 35px;
    color: ${(props) => props.theme.text};
    margin-left: 10px;
  }

  .navbar button:hover {
    color: ${(props) => props.theme.accent};
  }

  .navbar h2 {
    color: ${(props) => props.theme.titles};
    font-size: 40px;
    font-weight: 700;
    justify-content: center;
    margin: 0;
    padding: 0;
    align-items: center;
    text-align: left;
  }

  .navbar .titleSecondary {
    color: ${(props) => props.theme.accent};
  }

  .navbar a {
    background-color: ${(props) => props.theme.accent};
    color: ${(props) => props.theme.text};
    border: none;
    border-radius: 28px;
    padding: 0 20px;
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

  header {
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    align-items: center;
  }

  .containerTitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    padding: 5px 20px;
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

  header img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    margin-right: 70px;
    padding: 4px;
    border: 3px solid ${(props) => props.theme.accent};
  }

  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .about {
    text-align: center;
    flex-direction: column;
    height: 400px;
    padding-top: 10%;
    margin-bottom: 10%;
  }

  .about h2 {
    color: ${(props) => props.theme.accent};
    font-size: 3.2rem;
    font-weight: 400;
    margin: 0;
    padding-bottom: 25px;
  }

  .about .aboutContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  .about p {
    color: ${(props) => props.theme.secundaryText};
    font-size: 25px;
    text-align: center;
    margin: 0;
    padding-bottom: 20px;
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
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  .skills .containerSkills {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    font-size: 3.2rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 15%;
    background-color: ${(props) => props.theme.backgroundFooter};
    padding: 10px;
    width: 100%;
    height: 150px;
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
    margin-top: 10px;
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
    padding-top: 20px;
  }

  @media (max-width: 768px) {
    header {
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-top: 0;
    }

    .containerTitle {
      margin-top: 10px;
      align-items: center;
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
      margin-top: 40px;
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

  @media (max-width: 425px) {
    header {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-top: 10%;
    }

    .containerTitle {
      margin-top: 10px;
      align-items: center;
    }
    
    .containerTitle h1 {
      flex-direction: row;
      font-size: 35px;
      text-align: center;
      width: 80vw;
    }

    .containerTitle .text {
      font-size: 15px;
      text-align: justify;
      width: 80vw;
    }

    .containerTitle .buttonTheme {
      font-size: 30px;
    }

    .containerButtons {
      justify-content: center;
      display: flex;
      align-items: center;
      width: 90vw;
      margin-top: 15px;
      margin-bottom: 10%;
    }

    .containerButtons .buttonLink{
      margin: 0 10px;
      font-size: 14px;
    }

    .terminal {
      width: 300px;
      height: 150px;
    }

    main {
      margin-top: 10%;
    }

    .about {
      margin-top: 10px;
    }

    .about h2 {
      font-size: 40px;
    }

    .about .aboutContent {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .about .aboutContent img {
      width: 250px;
      margin-right: 0;
    }

    .about p {
      font-size: 15px;
    }

    .skills {
      margin-top: 80px;
      height: 900px;
    }

    .skills h2 {
      font-size: 40px;
    }

    .skills .containerSkills {
      margin-top: 10px;
    }

    .projects {
      margin-top: 40px;
    }

    .projects h2 {
      font-size: 40px;
    }

    footer {
      margin-top: 40px;
      height: 200px;
    }

    .linksOnpage {
      margin-top: 20px;
    }

    .linksOnpage li {
      margin: 0 15px;
      font-size: 15px;
    }

    .linksOnpage li a {
      font-size: 15px;
    }

    .socialMedia {
      margin-top: 15px;
    }

    .copyRight{
      font-size: 14px;
    }
  }
`;

export default HomeStyle;
