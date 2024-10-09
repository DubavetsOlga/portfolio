import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Logo: React.FC = () => {
    return (
        <StyledLogo>
            <a href="#">
                <Icon width="60" height="60" viewBox="0 0 122 102" iconId={"logo"}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
    flex-grow: 1;

    a {
        color: ${theme.colors.accent};
    }
`;
