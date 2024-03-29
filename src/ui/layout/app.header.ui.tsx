import styled from "styled-components";

const AppHeaderUi = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
    width: 100%;
    background-color: #2b2b2b;
    color: ${ ({ theme }) => theme.colors.warmGreyThree };
`;

export default AppHeaderUi;