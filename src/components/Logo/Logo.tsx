import * as S from './styles';

export const Logo = () => {
  return (
    <S.MainContainer>
      <S.Logo
        src={'/assets/images/logo/logo-buildbox.png'}
        alt='Logo'
        title='Logo'
        height={500}
        width={500}
        priority
        quality={100}
      />
    </S.MainContainer>
  );
};
