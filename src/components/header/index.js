import React from 'react';
import { Container, Wrapper, Column, HeaderLink, BorderRouter } from './styles/Header';


export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Column = function HeaderColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}


Header.HeaderLink = function HeaderLinkInner({ children, ...restProps }) {
  return <HeaderLink {...restProps}>{children}</HeaderLink>
}

Header.BorderRouter = function BorderRouterInner({ children, ...restProps }) {
  return <BorderRouter {...restProps}>{children}</BorderRouter>
}
