import styled, {css} from "styled-components"

interface ButtonProps {
    disabledStyle: boolean;
}

export const MainContainer = styled.article`
    background-color: rgb(52,52,52);
`

export const ArticleHeader = styled.header`
    height: 6rem;
    background-color: rgb(43 43 43); 
    display: flex; 
    justify-content: center;
`

export const MainLogo = styled.img`
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
`

export const FormContainer = styled.section`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    height: calc(100vh - 6rem);
    margin: auto;
    max-width: 32rem;
`

export const Form = styled.form`
    font-size: 0.875rem;
    line-height: 1.25rem;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: rgb(49 49 49);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(59 59 59);
    border-radius: 0.5rem;
`

export const UploadedImageContainer = styled.div`
    margin: auto;
    padding-left: 1rem;
`

export const UploadedPhoto = styled.img`
    margin-left: 1rem;
    border-radius: 36px;
    display: inline;
    width: 5rem;
    height: 5rem;
`

export const TrashImage = styled.img`
    margin-left: 1rem;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
    border-radius: 36px;
`

export const BorderImageUpload = styled.img`
    height: 5rem;
`

export const DefaultImage = styled.img`
    position: absolute;
    margin-top: 1.5rem;
    margin-top: 1.5rem;
    left: 245px;
    top: 27px;
    cursor: pointer;
`

export const ImageUpload = styled.input`
    cursor: pointer;
    margin-top: 1.5rem;
    opacity: 0;
    position: absolute;
    top: 0px;
    left: 216px;
    width: 5rem;
    height: 5rem;
`

const InputDefaultStyle = css`
    background-color: rgb(73 73 73);
    margin-top: 1rem;
    border-radius: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: rgb(159 159 159);
`

export const NameInput = styled.input`
    ${InputDefaultStyle};
`

export const MessageInput = styled.textarea`
    ${InputDefaultStyle};
    resize: none;
`

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 2rem;
    gap: 1.5rem;
`

export const Discard = styled.p`
    color: rgb(95 95 95);
    text-decoration-line: underline;
    cursor: pointer;
`

export const PublishButton = styled.button`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 0.5rem;

    ${(props: ButtonProps) => props.disabledStyle ? "background-color: rgb(95, 95, 95); color: rgb(49,49,49); cursor: default;" : "background-color: rgb(113, 187, 0); color: white; cursor: pointer;"}
`

export const FeedText = styled.p`
    color: rgb(122 122 122);
    margin-top: 3.5rem;
    margin-bottom: 0.5rem;
`

export const PostsSection = styled.section`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`
