import React from 'react';
import { Container, Wrapper, Row, Column, Link, Logo } from './styles/Header';


export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Header.Row = function HeaderRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>
}

Header.Column = function HeaderColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>
}
Header.HeaderLink = function HeaderLink({ children, ...restProps }) {
  return <HeaderLink {...restProps}>{children}</HeaderLink>
}

Header.BorderRouter = function BorderRouter({ children, ...restProps }) {
  return <BorderRouter {...restProps}>{children}</BorderRouter>
}
