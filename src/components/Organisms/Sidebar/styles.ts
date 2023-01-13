import styled, { css } from "styled-components";

type OverlayProps = {
  visible: boolean;
};

export const Container = styled.div`
  overflow: hidden;
`;

export const Overlay = styled.div<OverlayProps>`
  ${({ visible }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background: #00000066;
    z-index: 50;
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? "all" : "none"};
    transition: opacity 650ms ease-in-out;
    overflow: hidden;
  `}
`;

export const Content = styled.div<OverlayProps>`
  ${({ visible, theme }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: ${theme.colors.background.primary};
    transition: transform 650ms ease-in-out;
    z-index: 100;
    height: 100%;
    width: 442px;
    overflow: auto;
    transform: ${visible
      ? `translateX(calc(100vw - 442px))`
      : `translateX(100vw)`};

    @media (max-width: 900px) {
      width: 100%;
      transform: ${visible ? `translateX(0)` : `translateX(200%)`};
    }
  `}
`;
