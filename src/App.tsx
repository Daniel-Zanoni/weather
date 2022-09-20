import { Header } from './components/Header/Header';
import { ListBox } from './components/ListBox/ListBox';
import { Container } from './styles/Container';

import './styles/global.css';

function App() {
    return (
        <>
            <Header />
            <Container>
                <h1>Estudando ReactJS mais a fundo.</h1>
                <ListBox />
            </Container>
        </>
    );
}

export default App
