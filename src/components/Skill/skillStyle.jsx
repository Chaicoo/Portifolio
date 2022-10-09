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
        cursor: pointer;
    }

    .skillTitle {
        font-size: 30px;
        font-weight: 700;
        color: ${(props) => props.theme.text};
    }

    .skillIcon {
        font-size: 80px;
        color: ${(props) => props.theme.accent};
        transition: 0.9s;

    }

    .skillIcon:hover {
        color: ${(props) => props.theme.text};
        transform: scale(0.7);

    }


`;

export default SkillStyle;