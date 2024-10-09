import React from "react";
import { S } from "./Footer_Styles"
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Socials } from "../../components/socials/Socials";

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify="center" direction="column" align="center">
                    <Socials/>
                    <S.Text>
                        Designed and built by <S.ColorText>Volha Dubavets</S.ColorText> with <S.ColorText>Love</S.ColorText> & <S.ColorText>Coffee</S.ColorText>
                    </S.Text>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
