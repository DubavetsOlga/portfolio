import React from "react";
import { TabsStatusType } from "./../tabMenu/TabMenu";
import styled from "styled-components";

const skills = [
    "Creation Web apps using ReactJs with TypeScript and various libraries.",
    "Using Redux and Redux-toolkit to manage application state.",
    "Cross-browser, adaptive, responsive development with CSS-preprocessors, Material UI and And Design libraries.",
    "Implementation of multilingual application using localization management platform.",
    "Сheck the correctness of the code with Unit Tests and take Storybook for demonstration of individual modules of the application.",
    "Creation of applications with login and registration forms, as well as functionality with the ability to add, delete, change and filter data."
];

const experience = [
    {
        who: "Salesforce Developer",
        where: "VPR Consulting",
        when: "08/2021 - 11/2023"
    },
    {
        who: "Full-stack developer",
        where: "Vitebsk State University",
        when: "06/2015 - 07/2021"
    },
];

const education = [
    {
        who: "Front-end developer",
        where: "IT-Incubator",
        when: "2024 - 2025"
    },
    {
        who: "Mathematician-programmer",
        where: "Vitebsk State University",
        when: "2010 - 2015"
    },
];

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
            <ul>{skills.map(el => <li>{el}</li>)}</ul>
        ),
        experience: (
            <ul>
                {experience.map(el => 
                    <li>
                        <p><span>{el.who}</span> - {el.where}</p>
                        <p>{el.when}</p>
                    </li>
                )}
            </ul>
        ),
        education: (
            <ul>
                {education.map(el => 
                    <li>
                        <p><span>{el.who}</span> - {el.where}</p>
                        <p>{el.when}</p>
                    </li>
                )}
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
