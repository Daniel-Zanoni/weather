import { HeaderStyle, ContainerStyle, NavStyle } from './styles';

import logoImg from '../../assets/all/hail.svg';

export function Header(){
    return (
        <HeaderStyle >
            <ContainerStyle>
                <img src={logoImg} alt="" className="logo" />
                <NavStyle>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Test</a></li>
                        <li><a>Test 2</a></li>
                    </ul>
                </NavStyle>
            </ContainerStyle>
        </HeaderStyle>
    );
}