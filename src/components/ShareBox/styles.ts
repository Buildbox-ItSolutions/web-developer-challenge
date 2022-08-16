import styled from 'styled-components';

import Card from '../Card';

export const Container = styled(Card)`
    margin: 20px 0;

    > form {
        display: flex;
        flex-direction: column;
    }
`;

export const ImageSection = styled.section`
    > img {
    }
`;

export const ActionsSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
