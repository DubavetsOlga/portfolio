import React from "react";
import { TabsStatusType } from "./../tabMenu/TabMenu";
import styled from "styled-components";


export const TabPanel: React.FC<{panel: TabsStatusType}> = (props: {panel: TabsStatusType}) => {
    const tabs: Record<TabsStatusType, React.ReactElement> = {
        mainskills: (
            <ul>
                <li>
                    <p><span>Front-end developer</span> - Development</p>
                    <p>React / Redux / Type Script</p>
                </li>
            </ul>
        ),
        skills: (
            <ul>
                <li>Creation Web apps using ReactJs with TypeScript and various libraries.</li>
                <li>Using Redux and Redux-toolkit to manage application state.</li>
                <li>Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and And Design libraries.</li>
                <li>Implementation of multilingual application using localization management platform.</li>
                <li>Сheck the correctness of the code with Unit Tests and take Storybook for demonstration of individual modules of the application.</li>
                <li>Creation of applications with login and registration forms, as well as functionality with the ability to add, delete, change and filter data.</li>
            </ul>
        ),
        experience: (
            <ul>
                <li>
                    <p><span>Salesforce Developer</span> - VPR Consulting</p>
                    <p>08/2021 - 11/2023</p>
                </li>
                <li>
                    <p><span>Full-stack developer</span> - Vitebsk State University</p>
                    <p>06/2015 - 07/2021</p>
                </li>
            </ul>
        ),
        education: (
            <ul>
                <li>
                    <p><span>Front-end developer</span> - IT-Incubator</p>
                    <p>2024 - 2025</p>
                </li>
                <li>
                    <p><span>Mathematician-programmer</span> - Vitebsk State University</p>
                    <p>2010 - 2015</p>
                </li>
            </ul>
        ),
    };

    return (
        <Tab>
            {tabs[props.panel]}
        </Tab>
    );
};

const Tab = styled.div`
    li {
        color: ${(props) => props.theme.colors.secondFont};
        text-align: justify;
        line-height: 1.4;
        margin-bottom: 10px;
        font-weight: 300;
    }

    span {
        font-weight: 500;
    }
`;
