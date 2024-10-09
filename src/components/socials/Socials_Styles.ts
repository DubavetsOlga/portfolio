import styled from "styled-components";
import { theme } from "../../styles/Theme";


const List = styled.ul`

`;

const ListItem = styled.li`
    float: left;
    transition: ${theme.animations.transition};

    & + li {
        padding-left: 20px;
    }

    &:hover {
        transform: scale(1.2);
    }
`;

const Link = styled.a`
    color: ${(props) => props.theme.colors.secondFont};
`;

export const S = {
    List,
    ListItem,
    Link,
}
