import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme";
import { Button } from "../../../components/Button";

const Slogan = styled.section`
    ${SectionTitle} {
        background: -webkit-linear-gradient(${theme.colors.gradient});
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media ${theme.media.mobile} {
            font-size: 44px;
        }
    }

    ${Button} {
        display: block;
        margin: 0 auto;
    }
`;

export const S = {
    Slogan,
}
