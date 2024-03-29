import styled from "styled-components";

const AppContainerUi = styled.div`
    min-height: 100vh;
    padding: 0;
    margin: 0;
    background-color: ${ ({ theme}) => theme.colors.black };
    color: ${ ({ theme }) => theme.colors.warmGreyThree }
    max-width: 100%;
    width: 100%;
`;

export default AppContainerUi;