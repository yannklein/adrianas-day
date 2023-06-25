import Carousel from './components/Carousel'
import styled from 'styled-components';
import appData from './assets/app-data.json'

function App() {

  return (
    <AppFrame>
      <HiddenMsg >{appData.header}</HiddenMsg>
      <Carousel />
      <p>{appData.footer}</p>
    </AppFrame>
  )
}

const HiddenMsg = styled.p`
color: hsl(200, 50%, 80%);
`;

const AppFrame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction:  column;
  text-align: center;
  background-color: #D9AFD9;
  background: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
  overflow: hidden;
  touch-action: none;
`;

export default App
