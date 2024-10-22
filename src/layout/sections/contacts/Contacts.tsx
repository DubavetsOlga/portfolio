import React, { ElementRef, useRef } from "react";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
        .sendForm('service_0s42blq', 'template_ffh79sm', form.current, {
            publicKey: 'LKBY9a07P3HpXmC1g',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
        );

        e.target.reset();

        const dialog: any = document.querySelector("dialog");
        dialog.showModal();
        setTimeout(() => { dialog.close();}, 1000);
    };

    return (
        <S.Contact id="contact">
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder="Name*" name="user_name"/>
                    <S.Field required placeholder="Email*" name="email"/>
                    <S.Field required placeholder="Subject*" name="subject"/>
                    <S.Field required placeholder="Message*" as="textarea" name="message"/>
                    <Button type="submit">Send message</Button>
                </S.Form>
            </Container>
            <S.Dialog>
                <p>Message is send.</p>
            </S.Dialog>
        </S.Contact>
    );
};
