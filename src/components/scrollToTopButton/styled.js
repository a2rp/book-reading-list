import styled from "styled-components";

export const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 1000;
        width: 44px;
        height: 44px;
        border-radius: 999px;
        color: inherit;
        background: transparent;
        border: 1px solid currentColor;
        display: grid;
        place-items: center;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transform: translateY(8px);
        pointer-events: none;
        transition: opacity 200ms ease, transform 200ms ease;

        &[data-visible="true"] {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        &:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
            transition: none;
            transform: none;
        }
    `,
};
