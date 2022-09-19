import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    padding: 0 20px;
    background-color: var(--gray-700);
    border-bottom: 1px solid rgba(255,255,255,0.1);
    .logo {
        width: 100%;
        max-width: 150px;
    }
`;

export const ContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavStyle = styled.nav`
    ul {
        display: flex;
        align-items: center;
    }
    li {
        font-size: 18px;
        color: var(--white);
        margin: 0 10px;
        list-style: none;
    }
`