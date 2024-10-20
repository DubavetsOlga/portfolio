import styled from "styled-components";
import photo from "../../../assets/images/Abstract.svg";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Main = styled.section`
    position: relative;

    ${FlexWrapper} {
        min-height: 630px;

        @media ${theme.media.mobile} {
            min-height: 300px;
        }
    }
`;

const Text = styled.div`
    font-size: 58px;
    font-weight: 700;
    letter-spacing: -1px;
    flex-grow: 1;
    margin: 50px 0 30px;

    max-width: 636px;

    @media ${theme.media.mobile} {
        font-size: 36px;
    }
`;

    /*${font({weight: 700, Fmax: 58, Fmin: 48})};*/

const Name = styled.span`
    background: -webkit-linear-gradient(${theme.colors.gradient});
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Photo = styled.img`
    max-width: calc(100vw - 30px);
    width: 349px;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;

    border-image-source: linear-gradient(${theme.colors.gradient});
    border: 9px solid #0000;
    border-radius: 230px;
    background: linear-gradient(${theme.colors.gradient}) border-box;
    background-clip: border-area;
`;

const ImgContainer = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: url(${photo});
        max-width: 100vw;
        position: absolute;
        z-index: 0;
        top: -40%;
        left: -40%;
        z-index: 0;

        @media ${theme.media.tablet} {
            display: none;
        }
    }
`;

export const S = {
    Main,
    Photo,
    Text,
    Name,
    ImgContainer,
}
