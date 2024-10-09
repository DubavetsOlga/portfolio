import React  from "react";
import { S } from "./../Works_Styles"
import { Icon } from "../../../../components/icon/Icon";

type WorkPropsType = {
    title: string;
    text: string;
    src: string;
    techStack: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.Image src={props.src} alt={""}/>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Stack>Tech stack: <S.Stacks>{props.techStack}</S.Stacks></S.Stack>
                <S.Links>
                    <a href={"#"}>
                        <Icon width="20" height="20" viewBox="0 0 20 20" iconId="link"/><span>Live Preview</span>
                    </a>
                    <a href={"#"}>
                        <Icon width="20" height="20" viewBox="0 0 30 30" iconId="github"/><span>View Code</span>
                    </a>
                </S.Links>
            </S.Description>
        </S.Work>
    );
};
