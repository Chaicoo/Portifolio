import styled from "styled-components";

const SkillStyle = styled.div`
    .skill {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        border-radius: 10px;
        transition: 0.5s;
    }

    .skillTitle {
        font-size: 30px;
        font-weight: 700;
        color: ${(props) => props.theme.textSkill};
    }

    .skillIcon {
        font-size: 80px;
        color: ${(props) => props.theme.accent};
        transition: 0.9s;
        cursor: pointer;

    }

    .skillIcon:hover {
        color: ${(props) => props.theme.textSkill};
        transform: scale(0.7);

    }

    @media (max-width: 768px){
        .skill {
            margin-top: 20px;
        }
    }

    @media (max-width: 425px){
        .skill {
            margin-top: 10px;
            width: 150px;
        }

        .skillTitle {
            font-size: 20px;
        }

        .skillIcon {
            font-size: 50px;
        }
    }

`;

export default SkillStyle;