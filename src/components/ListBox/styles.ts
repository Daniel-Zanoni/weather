import styled from 'styled-components';

export const ContainerStyle = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin: 20px 0;

    .box {
        background-color: var(--gray-700);
        padding: 15px;
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 2px;
        .box-image {
            width: 150px;
            display: block;
            margin: 0 auto;
        }
    }
`;
