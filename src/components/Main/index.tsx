import * as S from './styles';

export const Main = ({
  title = 'Advanced React - Boilerplate',
  description = 'TypeScript, React, NextJs, Styled Components e StoryBook'
}) => {
  return (
    <S.Wrapper>
      <S.WrapperLogo>
        <S.Logo
          src="/img/logo-512.svg"
          alt="Logo do React, imagem de um átomo"
        />

        <S.Title>{title}</S.Title>
      </S.WrapperLogo>

      <S.Description>{description}</S.Description>

      <S.Illustration
        src="/img/icon-512.svg"
        alt="Imagem de um terminal estilo do MacOs"
      />
    </S.Wrapper>
  );
};
