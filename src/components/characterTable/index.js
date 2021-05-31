import React from 'react';
import {Container, Wrapper, Row, Title, Logo, Input, InputTitle, InputDiv} from './styles/characterTable';

export default function CharacterTable({children, ...restProps}) {
    return <Container{...restProps}>{children}</Container>
}

CharacterTable.Wrapper = function CharacterTableWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

CharacterTable.Row = function CharacterTableRow({children, ...restProps}) {
    return <Row {...restProps}>{children}</Row>
}


CharacterTable.Title = function CharacterTableTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

CharacterTable.Logo = function CharacterTableLogo({children, ...restProps}) {
    return <Logo {...restProps}>{children}</Logo>
}

CharacterTable.InputDiv = function CharacterTableInputDiv({children, ...restProps}) {
  return <InputDiv {...restProps}>{children}</InputDiv>
}
CharacterTable.InputTitle = function CharacterTableInputTitle({children, ...restProps}) {
  return <InputTitle {...restProps}>{children}</InputTitle>
}

CharacterTable.Input = function CharacterTableInput({children, ...restProps}) {
  return <Input {...restProps}>{children}</Input>
}
