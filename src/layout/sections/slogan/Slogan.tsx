import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { S } from "./Slogan_Styles";


export const Slogan: React.FC = () => {
    return (
        <S.Slogan>
            <Container>
                <SectionTitle>I Am Available For Work</SectionTitle>
                <Button>Contact me</Button>
            </Container>
        </S.Slogan>
    );
};
