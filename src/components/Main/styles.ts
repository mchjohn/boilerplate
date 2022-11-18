import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #6a6b70;
  background-color: #131316;

  text-align: center;
`;

export const WrapperLogo = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const Logo = styled.img`
  width: 12rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 400;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 2rem;
  width: min(40rem, 100%);
`;
