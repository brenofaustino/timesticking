import { Container } from './components/Container';
// import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {

    return (
        <>
            <Container>
                <Logo></Logo>
            </Container>
            <Container>
                <Menu/>
            </Container>
            <Container>
                <CountDown/>
            </Container>
            <Container>
                <form className='form' action=''>
                    <div className='form-row'>
                        <DefaultInput labelText='task' id='meu-input' type='text' placeholder='digite algo'/>
                    </div>
                    <div className='form-row'>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='form-row'>
                        <p>ciclos</p>
                        <p>0 0 0 0 0</p>
                    </div>
                    <div className='form-row'>
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    )
};