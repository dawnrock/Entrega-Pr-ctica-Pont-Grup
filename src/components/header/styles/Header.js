import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2vh;
  background-color: #bbd0ff;

`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-right: 60px;
  font-size: 36px;
`


export const HeaderLink
  = styled(Link)`
  color: grey;
  margin-bottom: 20px;
  font-size: 24px;
  text-decoration: none;

  &:hover {
    color: #585481;
    transition: 200ms ease-in;
  }
`
export const BorderRouter = styled.hr`
  border: 2px solid #585481;
  padding: 0;
  margin:0;
`





