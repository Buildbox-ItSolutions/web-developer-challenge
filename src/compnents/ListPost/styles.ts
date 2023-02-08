import styled from 'styled-components';


export const Container = styled.div`
    label{
        display:inline-block;
        padding-bottom: 8px;
    }
`;

export const PostsContainer = styled.ul`
    list-style-type: none;
`;

export const Post = styled.li`
    border: 1px solid var(--grey-200);
    border-radius: 3px;
    background: var(--black-200);
    padding: 50px 24px;
    position: relative;

    &+li {
        margin-top: 1rem;
    }

    .content-post {
        display: flex;
        gap: 32px;
        align-items: flex-start;
        .mensagem {
            margin-bottom: 24px;
        }

        img.imagem-post{
            width: 88px;
            height: 88px;
            object-fit: cover;
            border-radius: 36px;
        }
    }

    @media (max-width: 550px) {
        .content-post {
            flex-direction: column;
        }
    }

`;

export const ButtonRemovePost = styled.button`
    padding: 0 !important;
    background: transparent;
    position: absolute;
    right: 12px;
    top: 12px;
`;