import styled from 'styled-components';

const DivError = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    place-content: center;
    place-items: center;
`;
const H1Error = styled.h1`
    
    font-weight: 400;
    font-size: 60px;
    line-height: 38px;
`;

export default function NotFound(){
    return (
        <DivError>
            <H1Error>
                Error 404
                <br />
                <br />
                Page not Found
            </H1Error>            
        </DivError>
    );
}