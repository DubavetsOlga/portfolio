import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn: React.FC = () => {

    const [showBtn, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowButton(window.scrollY > 200);
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon
                        iconId={"arrowGoTop"}
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                    />
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
    background-color: ${(props) => props.theme.colors.secondFont};
    opacity: 0.5;
    padding: 6px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.colors.primaryBg};
`;
