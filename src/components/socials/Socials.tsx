import React from "react";
import { Icon } from "../icon/Icon";
import { S } from "./Socials_Styles";


const socialItems = [
    {
        icon: "github",
        viewBox: "0 0 30 30",
        link: "https://github.com/DubavetsOlga"
    },
    {
        icon: "instagram",
        viewBox: "0 0 25 25",
        link: "https://www.instagram.com"
    },
    {
        icon: "linkedin",
        viewBox: "0 0 30 30",
        link: "https://www.linkedin.com"
    },
];

export const Socials: React.FC = () => {
    return (
        <S.List>
            {socialItems.map((s, index) => {
                return (
                    <S.ListItem key={index}>
                        <S.Link href={s.link}>
                            <Icon width="30" height="30" viewBox={s.viewBox} iconId={s.icon}/>
                        </S.Link>
                    </S.ListItem>
                )
            })}
        </S.List>
    );
};
