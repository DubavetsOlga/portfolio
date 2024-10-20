import styled from "styled-components"
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Header = styled.header<{ $showShadow?: boolean }>`
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    background-color: ${(props) => props.theme.colors.primaryBg};
    box-shadow: ${props => props.$showShadow ? `0px 2px ${theme.colors.accent}` : "none"};
    transition: .8s ease;

    button {
        color: ${(props) => props.theme.colors.secondFont};
        transition: ${theme.animations.transition};

        @media ${theme.media.desktop} {
            &:hover {
                transform: rotate(45deg);
            }
        }
    }

    ${FlexWrapper} {
        gap: 30px;

        @media ${theme.media.mobile} {
            gap: 15px;
        }
    }
`;

export const S = {
    Header,
}
