import React from "react";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";


export type TabsStatusType = "mainskills" | "skills" | "experience" | "education";

type TabMenuPropsType = {
    tabItems: Array<{status: TabsStatusType, title: string}>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string
};

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabItems.map((item, index) => {
                    return (
                        <Link key={index} onClick={() => {props.changeFilterStatus(item.status)}}
                            className={item.status === props.currentFilterStatus ? "active" : ""}
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: center;
        /* max-width: 352px;*/
        width: 100%;
        margin: 0 auto 30px;
        gap: 20px;

        @media ${theme.media.mobile} {
            justify-content: space-between;
            gap: 0;
        }
    }
`;

const Link = styled.a`
    font-size: 18px;
    transition: ${theme.animations.transition};

    &.active {
        background: -webkit-linear-gradient(${theme.colors.gradient});
        background-clip: unset;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    &:hover {
        transform: scale(1.1);
    }

    @media ${theme.media.mobile} {
        font-size: 16px;

        &:hover {
            transform: none;
        }
    }
`;
