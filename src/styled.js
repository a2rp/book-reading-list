import styled from "styled-components";

export const Styled = {
    App: styled.div`
        min-height: 100dvh;
        background: #0b0d12;
        color: #e5e7eb;
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 1200;
        min-height: 68px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 24px;
        padding: 12px clamp(16px, 4vw, 48px);
        border-bottom: 1px solid #2a303b;
        background: rgba(11, 13, 18, 0.94);
        backdrop-filter: blur(12px);
    `,
    Brand: styled.a`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #f8fafc;
        font-weight: 800;
        text-decoration: none;
        white-space: nowrap;

        &:hover {
            text-shadow: 0 0 12px rgba(148, 163, 184, 0.55);
        }
    `,
    Logo: styled.img`
        width: 34px;
        height: 34px;
        object-fit: contain;
        border: 1px solid #343b48;
        border-radius: 9px;
        background: #121620;
    `,
    Nav: styled.nav`
        display: flex;
        align-items: center;
        gap: 6px;

        @media (max-width: 680px) {
            position: absolute;
            top: calc(100% + 10px);
            left: 16px;
            right: 16px;
            display: ${({ $open }) => ($open ? "flex" : "none")};
            flex-direction: column;
            align-items: stretch;
            padding: 10px;
            border: 1px solid #2a303b;
            border-radius: 14px;
            background: #121620;
            box-shadow: 0 18px 42px rgba(0, 0, 0, 0.35);
        }
    `,
    NavLink: styled.a`
        padding: 8px 10px;
        border: 1px solid transparent;
        border-radius: 9px;
        color: #aab4c4;
        text-decoration: none;
        transition: color 0.18s ease, border-color 0.18s ease,
            box-shadow 0.18s ease, text-shadow 0.18s ease;

        &:hover,
        &.active {
            color: #f8fafc;
            border-color: #65738a;
            box-shadow: 0 0 0 1px rgba(148, 163, 184, 0.2);
            text-shadow: 0 0 10px rgba(148, 163, 184, 0.45);
        }
    `,
    Actions: styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
    `,
    MenuButton: styled.button`
        width: 38px;
        height: 38px;
        display: none;
        place-items: center;
        border: 1px solid #343b48;
        border-radius: 9px;
        color: #e5e7eb;
        background: transparent;
        transition: border-color 0.18s ease, box-shadow 0.18s ease,
            text-shadow 0.18s ease;

        &:hover,
        &:focus-visible {
            border-color: #94a3b8;
            box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.2);
            text-shadow: 0 0 10px rgba(148, 163, 184, 0.45);
            outline: none;
        }

        @media (max-width: 680px) {
            display: inline-grid;
        }
    `,
    Content: styled.main`
        padding-top: 68px;
    `,
    Footer: styled.footer`
        border-top: 1px solid #2a303b;
        padding: 18px clamp(16px, 4vw, 48px);
        background: #0b0d12;
    `,
    FooterMain: styled.div`
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        color: #aab4c4;
        font-size: 12px;

        .copyright a {
            color: #f8fafc;
            font-weight: 600;
            text-decoration: none;
        }

        .copyright a:hover {
            text-shadow: 0 0 10px rgba(148, 163, 184, 0.55);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            flex-wrap: wrap;
        }

        .links a {
            width: 32px;
            height: 32px;
            display: inline-grid;
            place-items: center;
            border: 1px solid #343b48;
            border-radius: 8px;
            color: #e5e7eb;
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                text-shadow 0.18s ease;
        }

        .links a:hover,
        .links a:focus-visible {
            border-color: #94a3b8;
            box-shadow: 0 0 0 2px rgba(148, 163, 184, 0.2);
            text-shadow: 0 0 10px rgba(148, 163, 184, 0.45);
            outline: none;
        }

        @media (max-width: 680px) {
            justify-content: center;
            text-align: center;

            .links {
                justify-content: center;
            }
        }
    `,
};
