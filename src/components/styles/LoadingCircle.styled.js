import styled, { keyframes } from "styled-components";

export const breatheAnimation = keyframes`
 0% { bottom: 0; opacity: 0.1}
 50% { bottom: 0; opacity: 1}
 100% { bottom: 100px; opacity: 0.1}
`;

export const expandAnimation = keyframes`
 0% { width: ${({ size }) => size}}
 100% { width: 300px; border-radius: 15px}
`;

export const OuterCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding};
  border: solid 0.25rem ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  animation-play-state: ${({ loading }) => (loading ? "paused" : "running")};
  animation-fill-mode: forwards;
  animation-name: ${expandAnimation};
  animation-duration: 0.5s;
`;

export const InnerCircle = styled.div`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
