import React from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder="name"/>
                    <S.Field placeholder="subject"/>
                    <S.Field placeholder="message" as="textarea"/>
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};
