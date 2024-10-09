import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { AboutMe } from './layout/sections/about/AboutMe';
import { Slogan } from './layout/sections/slogan/Slogan';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';
import { Particle } from './components/particle/Particle';

import React, { useContext } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Theme'; 
import { GlobalStyle } from './styles/Global.styled';
import { ThemeContext } from './contexts/ThemeContext';


function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Particle/>
            <StyledApp>
                <Header/>
                <Main/>
                <AboutMe/>
                <Skills/>
                <Works/>
                <Slogan/>
                <Contacts/>
                <Footer/>
                <GoTopBtn/>
            </StyledApp>
        </ThemeProvider>
    );
}

const StyledApp = styled.div`
    position: relative;
    color: ${(props) => props.theme.colors.font};
    background-color: ${(props) => props.theme.colors.primaryBg};

    transition: .8s ease;

    h3 {
        color: ${(props) => props.theme.colors.secondFont};
    }
`;

export default App;
