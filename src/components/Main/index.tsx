import * as S from './styles';

export const Main = () => {
  return (
    <S.Wrapper>
      <S.WrapperLogo>
        <S.Logo
          src="/img/logo-512.svg"
          alt="Logo do React, imagem de um átomo"
        />

        <S.Title>Advanced React - Boilerplate</S.Title>
      </S.WrapperLogo>

      <S.Description>
        TypeScript, React, NextJs e Styled Components
      </S.Description>

      <S.Illustration
        src="/img/icon-512.svg"
        alt="Imagem de um terminal estilo do MacOs"
      />
    </S.Wrapper>
  );
};
