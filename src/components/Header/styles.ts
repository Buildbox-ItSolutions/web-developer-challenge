import styled from 'styled-components';

export const StyledHeader = styled.header`
     ${({ theme }) => theme.mixins.flexCenter};
     top: 0;
     z-index: 11px;
     padding: 0px 50px;
     width: 100%;
     height: var(--nav-height);
     background-color: var(--nav);

    @media (max-width: 1080px) {
        padding: 0 40px;
    }
    @media (max-width: 768px) {
        padding: 0 25px;
    }
`

export const StyledNav = styled.nav`
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    width: 100%;
    z-index: 12;

    .logo{

        img{
            width: 103px;
            height: 45px;
            object-fit: contain;
        }      
    }
`