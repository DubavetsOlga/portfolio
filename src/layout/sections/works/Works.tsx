import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { S } from "./Works_Styles"
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionInfo } from "../../../components/SectionInfo";
import { Work } from "./work/Work";
import workImg from "./../../../assets/images/works/work.png";
import workImg2 from "./../../../assets/images/works/work2.png";
import workImg3 from "./../../../assets/images/works/work3.png";
import workImg4 from "./../../../assets/images/works/work4.png";
import workImg5 from "./../../../assets/images/works/work5.png";
import workImg6 from "./../../../assets/images/works/work6.png";
import { v1 } from "uuid";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const workData = [
    {
        title: "Project Tile goes here",
        scr: workImg,
        techStack: "HTML, JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg2,
        techStack: "HTML, JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg3,
        techStack: "HTML, JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg4,
        techStack: "HTML, JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg5,
        techStack: "HTML, JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
    {
        title: "Project Tile goes here",
        scr: workImg6,
        techStack: "HTML, JavaScript, SASS, React",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
    },
];

const items = workData.map(w => 
    <Work key={v1()}
        title={w.title}
        text={w.text}
        techStack={w.techStack}
        src={w.scr}
    />
)

export const Works: React.FC = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;
    
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Works id="projects">
            <Container>
                <FlexWrapper align="center" direction="column">
                    <SectionTitle>Projects</SectionTitle>
                    <SectionInfo>Things I’ve built so far</SectionInfo>
                    {width > breakpoint 
                    ?
                        <FlexWrapper justify="space-between" align="flex-start" wrap="wrap">
                            {items}
                        </FlexWrapper>
                    :     
                        <S.Slider>
                            <AliceCarousel mouseTracking items={items}
                            />
                        </S.Slider>
                    }

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};
