import React, { useEffect, useState, useContext } from "react";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { Logo } from "../../components/logo/Logo";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { S } from "./Header_Styles"
import { Socials } from "../../components/socials/Socials";
import { ThemeContext } from '../../contexts/ThemeContext';
import { Icon } from "../../components/icon/Icon";


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    const { toggleTheme } = useContext(ThemeContext);

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowShadow(window.scrollY > 1);
        })
    }, []);

    return (
        <S.Header $showShadow={showShadow}>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo/>
                    {
                        width < breakpoint
                        ? <>
                                <Socials/>
                                <button onClick={toggleTheme}><Icon width="30" height="30" viewBox="0 0 30 30" iconId="theme"/></button>
                                <MobileMenu/>
                            </>
                        : <>
                                <DesktopMenu/>
                                <Socials/>
                                <button onClick={toggleTheme}><Icon width="30" height="30" viewBox="0 0 30 30" iconId="theme"/></button>
                            </>
                    }
                    
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
