import styled from "styled-components"
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

const Works = styled.section`
    position: relative;

    ${FlexWrapper} > ${FlexWrapper} {
        gap: 46px;
    }

    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
        position: absolute;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        background-color: ${(props) => props.theme.colors.secondFont};
        opacity: 0.5;
    }

    .alice-carousel__prev-btn {
        left: -2%;
        top: 40%;
    }

    .alice-carousel__next-btn {
        right: -2%;
        top: 40%;
    }

    .alice-carousel__prev-btn-wrapper,
    .alice-carousel__next-btn-wrapper {
        margin-top: -10px;
    }

    .alice-carousel__prev-btn-wrapper {
        margin-right: 6px;
    }

    .alice-carousel__next-btn-wrapper {
        margin-left: 6px;
    }

    .alice-carousel__prev-btn-item,
    .alice-carousel__next-btn-item {
        color: ${(props) => props.theme.colors.primaryBg};
        padding: 0;
        font-size: 40px;
    }
`;

//Work

const Work = styled.div`
    border-radius: 20px;
    background: ${(props) => props.theme.colors.boxColor};

    @media ${theme.media.desktop} {
        max-width: 375px;
    }

    @media not ${theme.media.mobile} {
        width: 30%;
        flex-grow: 1;
        min-width: min(360px, calc(100vw - 30px));
        text-align: justify;

        box-shadow: 2px 2px 100px 0px ${(props) => props.theme.colors.boxShadow};
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
`;

const Title = styled.h4`
    font-size: 28px;
    font-weight: 500;
    line-height: 0.9;
    color: ${(props) => props.theme.colors.title};

    @media ${theme.media.mobile} {
        font-size: 24px;
    } 
`;

const Text = styled.p`
    margin: 14px 0 10px;
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4;
    color: ${(props) => props.theme.colors.secondFont};

    @media ${theme.media.mobile} {
        font-size: 16px;
    } 
`;

const Description = styled.div`
    padding: 25px 20px;
`;

const Stack = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;

    margin-bottom: 20px;
    display: inline-block;

    @media ${theme.media.mobile} {
        font-size: 14px;
    }
`;

const Stacks = styled.span`
    font-size: 14px;
    font-weight: 300;
    line-height: 1.8;

    @media ${theme.media.mobile} {
        font-size: 13px;
    }
`;

const Links = styled.div`
    display: flex;

    a {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.link};

        display: flex;
        align-items: center;

        @media ${theme.media.mobile} {
            font-size: 14px;
        } 
    }

    a + a {
        margin-left: 60px;
    }

    a span {
        margin-left: 10px;
        transition: ${theme.animations.transition};

        &:hover {
            background: -webkit-linear-gradient(${theme.colors.gradient});
            background-clip: unset;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transform: scale(1.05);
        }
    }
`;

// Slider

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const S = {
    Works,
    Work,
    Image,
    Title,
    Text,
    Description,
    Stack,
    Stacks,
    Links,
    Slider,
}
