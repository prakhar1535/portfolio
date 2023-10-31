import Spline from '@splinetool/react-spline';
import styled from 'styled-components';


const Background = styled.div`
position: 'absolute';
z-index: -9999:
`

export default function App() {
  return (
    <Background> 
    <Spline style={{position: 'absolute', zIndex: '-1' , padding: '0', margin: '0', width: '100%' , height: '100%', top: '0', left: '0.1'}} scene="https://prod.spline.design/PkHBaT7Rc66IdCfN/scene.splinecode" />
    </Background>
  );
}
