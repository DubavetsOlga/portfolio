import styled from "styled-components"
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
    font-size: 48px;
    font-weight: 700;
    text-align: center;

    margin-bottom: 50px;

    @media ${theme.media.mobile} {
        font-size: 40px;
    }
`;
