import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Contact = styled.section`
    position: relative;
`;

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 156px;
    }
`;

const Field = styled.input`
    width: 100%;

    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.colors.font};

    padding: 0.5rem;
    border: double 1px transparent;
    border-radius: 6px;
    background-image: linear-gradient(${(props) => props.theme.colors.placeholderBg}, ${(props) => props.theme.colors.placeholderBg}),
                        linear-gradient(${theme.colors.gradient});
    background-origin: border-box;
    background-clip: padding-box, border-box;

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.borderColor};
    }
`;

const Dialog = styled.dialog`
    text-align: center;
    height: 50px;
    width: 230px;
    align-content: center;
    position: fixed;
    top: calc(50vh - 25px);
    left: calc(50vw - 115px);
    background: grey;
    border: ${(props) => props.theme.colors.boxColor};
    border-radius: 10px;
`

export const S = {
    Contact,
    Form,
    Field,
    Dialog,
}
