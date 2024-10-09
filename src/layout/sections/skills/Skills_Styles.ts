import styled from "styled-components"

const Skills = styled.section`
    position: relative;
`;

const Skill = styled.div`
    /*width: 120px;*/
    display: flex;
    flex-direction: column;
    align-items: center
    /*margin-bottom: 80px;*/
`;

const Title = styled.span`
    margin: 0 auto;
`;

export const S = {
    Skills,
    Skill,
    Title,
}
