import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 0;
    background-color: ${props => props.theme.colors.secondary};

    .navbar {
        &__logo {
            height: 100%;
            width: 100%;
            padding: 2rem;
        }

        &__button {
            position: absolute;
            right: 0;
            margin-right: 2rem;
        }
    }    

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        height: 69px;
    }
`;