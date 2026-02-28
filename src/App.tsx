import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

import './styles/theme.css';
import './styles/global.css';

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
                        <Cycles/>
                    </div>
                    <div className='form-row'>
                        <DefaultButton icon={<PlayCircleIcon/>}/>
                    </div>
                </form>
            </Container>
            <Container>
                <Footer/>
            </Container>
        </>
    )
};