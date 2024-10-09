import React  from "react";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import photo from "../../../assets/images/myphoto.jpg";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { S } from "./Main_Styles"


export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <S.Text>
                        Hi 👋, <br/>
                        I'm <S.Name>Volha Dubavets</S.Name>
                        <Typewriter
                            options={{
                                strings: ["Web Developer"],
                                autoStart: true,
                                loop: true,
                                delay: 150
                            }}
                        />
                    </S.Text>
                    <S.ImgContainer>
                        <Tilt>
                            <S.Photo src={photo} alt="" />
                        </Tilt>
                    </S.ImgContainer>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
