import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    height: 93px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    background-color: ${props => props.theme.colors.secondary};
    cursor: pointer;

    .navbar {

        &__logo {
            height: 100%;
            width: 100%;
        }

        &__button {
            position: absolute;
            right: 0;
            margin-right: 5.5rem;
        }
    }    

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        height: 80px;

        .navbar__button  {
            margin-right: 1rem;
        }
    }
`;