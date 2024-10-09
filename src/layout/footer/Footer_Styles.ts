import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
    padding: 40px 0;
    position: relative;
    background-color: ${(props) => props.theme.colors.primaryBg};
    transition: .8s ease;

    ${FlexWrapper} {
        position: relative;
        gap: 20px;

        &::before {
            content: "";
            position: absolute;
            border-top: 2px solid ${theme.colors.accent};
            top: -40px;
            left: 0;
            width: 100%;
        }
    }
`;

const Text = styled.span`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
`;

const ColorText = styled.span`
    background: -webkit-linear-gradient(${theme.colors.gradient});
    background-clip: unset;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const S = {
    Footer,
    Text,
    ColorText,
}
