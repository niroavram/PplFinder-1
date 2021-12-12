import styled from "styled-components";


export const User = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  gap: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-height: 128px;
  gap: 2px;
  overflow: hidden;
  flex-grow: 5;
`;

export const UserPicture = styled.img`
  border-radius: 45%;
  flex-grow: 3;

`;


export const IconButtonWrapper = styled.div`
  flex-direction: column;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
  flex-grow: 1;

`;
