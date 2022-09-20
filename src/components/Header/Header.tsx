import { HeaderStyle, ContainerStyle } from './styles';

import logoImg from '../../assets/all/hail.svg';

export function Header(){
    return (
        <HeaderStyle >
            <ContainerStyle>
                <img src={logoImg} alt="" className="logo" />
            </ContainerStyle>
        </HeaderStyle>
    );
}