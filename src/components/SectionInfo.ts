import styled from "styled-components"
import { theme } from "../styles/Theme";

export const SectionInfo = styled.h3`
    font-size: 32px;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;

    margin-bottom: 60px;

    @media ${theme.media.mobile} {
        font-size: 24px;
    }
`;
