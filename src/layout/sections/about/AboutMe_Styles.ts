import styled from "styled-components"
import { theme } from "../../../styles/Theme";
import photo from "../../../assets/images/drawing.svg";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";

const About = styled.section`
    position: relative;
    z-index: 1;

    img {
        max-width: 30%;
        max-height: 500px;
        object-fit: cover;

        margin-right: 20px;
        border-radius: 20px;

        border-image-source: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%);
        border: 2px solid #0000;
        background:linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%) border-box;
        background-clip: border-area;

        @media ${theme.media.tablet} {
            display: none;
        }
    }

    ${FlexWrapper} {
        margin-left: 30%;

        @media ${theme.media.tablet} {
            margin-left: 0;
        }
    }

    ${SectionTitle} {
        position: relative;

        &::before {
            content: url(${photo});
            position: absolute;
            top: -350px;
            left: -554px;
            z-index: -1;
            transform: scale(-1, 1);
            max-width: 95vw;
        }
    }
`;

const Description = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.secondFont};
    text-align: justify;
`;

export const S = {
    About,
    Description,
}
