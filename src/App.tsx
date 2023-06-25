import './App.css'
import Carousel from './components/Carousel'
import styled from 'styled-components';


function App() {
  const HiddenMsg = styled.p`
  color: hsl(200, 50%, 80%);
`;
  return (
    <>
      <HiddenMsg >I love you </HiddenMsg>
      <Carousel />
      <p>Made with ❤️ by Yann</p>
    </>
  )
}

export default App
