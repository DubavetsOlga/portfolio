import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: white;

    height: 40px;
    padding: 0 20px;
    border-radius: 6px;
    background-color: ${theme.colors.accent};

    position: relative;
    z-index: 0;

    transition: ${theme.animations.transition};

    &:hover {
        transform: translateY(-0.3rem);
        box-shadow: ${(props) => props.theme.colors.secondFont} 0 4px 16px;
    }
`;
