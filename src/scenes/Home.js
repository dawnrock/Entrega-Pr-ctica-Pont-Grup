import styled from 'styled-components/macro';
import Card from '../containers/cards';


function Home() {
  return (
    <Container>
      <Card/>
    </Container>
  );
}

const Container = styled.div`
text-align: center;
`


export default Home;
