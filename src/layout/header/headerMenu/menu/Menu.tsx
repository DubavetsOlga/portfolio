import React from "react";
import { S } from "./../HeaderMenu_Styles"


export const Menu: React.FC = () => {

    const items = [
        { title: "Home", href: "home" },
        { title: "About", href: "about", },
        { title: "Skills", href: "skills" },
        { title: "Projects", href: "projects" },
        { title: "Contact", href: "contact" }
    ];

    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.NavLink
                            activeClass="active"
                            to={item.href}
                            spy={true}
                            smooth={true}
                        >
                            {item.title}
                        </S.NavLink>
                    </S.MenuItem>
                )
            })}
        </ul>
    )
};
