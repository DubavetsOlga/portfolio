import React, { useState }  from "react";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./AboutMe_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { TabPanel } from "./tabPanel/TabPanel";
import photo from "../../../assets/images/myphoto.png";


const tabItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "Main Skills",
        status: "mainskills"
    },
    {
        title: "Skills",
        status: "skills"
    },
    {
        title: "Experience",
        status: "experience"
    },
    {
        title: "Education",
        status: "education"
    },
];

export const AboutMe: React.FC = () => {

    const [currentFilterStatus, setcurrentFilterStatus] = useState<TabsStatusType>("mainskills");

    function changeFilterStatus(value: TabsStatusType) {
        setcurrentFilterStatus(value);
    }

    return (
        <S.About id="about">
            <Container>
                    <FlexWrapper direction="column">
                        <SectionTitle>About Me</SectionTitle>
                        <S.Description>
                            I’d describe myself as a goal-oriented and hardworking person with experience in creating SPA, usingReact(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new technologies.
                        </S.Description>
                        <TabMenu
                            tabItems={tabItems}
                            changeFilterStatus={changeFilterStatus}
                            currentFilterStatus={currentFilterStatus}
                        />
                        <TabPanel panel={currentFilterStatus}/>
                    </FlexWrapper>
            </Container>
        </S.About>
    );
};

/*
                <FlexWrapper justify={"space-between"}>
                    <img src={photo} alt=""/>
                    <FlexWrapper direction="column">
                        <SectionTitle>About Me</SectionTitle>
                        <S.Description>
                            I’d describe myself as a goal-oriented and hardworking person with experience in creating SPA, usingReact(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new technologies.
                        </S.Description>
                        <TabMenu
                            tabItems={tabItems}
                            changeFilterStatus={changeFilterStatus}
                            currentFilterStatus={currentFilterStatus}
                        />
                        <TabPanel panel={currentFilterStatus}/>
                    </FlexWrapper>
                </FlexWrapper>
                */
