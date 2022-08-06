import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Lista
          <br />
          Studentów
        </h1>
      </Logo>
      <StyledLink to="/">Panel</StyledLink>
      <StyledLink to="/add-user">Dodaj użytkownika</StyledLink>
      <StyledLink to="/">Ustawienia</StyledLink>
      <StyledLink to="/">Wyloguj</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
