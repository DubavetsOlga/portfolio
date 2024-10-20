import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

//Menu

const MenuItem = styled.li`
    position: relative;
    transition: ${theme.animations.transition};

    &:hover {
        transform: scale(1.2);
    }
`;

const NavLink = styled(Link)`
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: ${(props) => props.theme.colors.secondFont};
    text-align: center;

    &.active {
        background: -webkit-linear-gradient(${theme.colors.gradient});
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

//Desktop Menu

const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`;

//Mobile Menu

const MobileMenu = styled.nav`
    min-width: 50px;
`;

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 50px;
    height: 40px;
    top: 26px;
    right: 16px;
    z-index: 999999;
    background-color: transparent;
    border: none;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${(props) => props.theme.colors.font};
        position: absolute;
        left: 10px;
        bottom: 20px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${(props) => props.theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${(props) => props.theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`;

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: .8s ease-in-out;

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: .8 ease-in-out;
    }

    ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: translateY(0);

        & ul {
            gap: 30px;
        }
    `}
`;


export const S = {
    MenuItem,
    DesktopMenu,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    NavLink,
}
