import styled from 'styled-components'

export const Container = styled.div`
    width: 516px;
    min-height: 205px;
    padding: 56px 24px 32px 24px;
    margin-bottom: 16px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const Image = styled('div')<{ size: string}>`
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        width: ${props => props.size};
        height: ${props => props.size};
        object-fit: cover;
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 348px;
    margin-left: 30px;
    flex: 1;

    p {
        text-align: left;
        font-size: 16px;
        margin-bottom: 24px;
    }
`

export const Span1 = styled.div`
    text-align: left;
    font-size: 12px;
    color: #5f5f5f;
`

export const Span2 = styled.div`
    text-align: left;
    font-size: 14px;
    color: #7a7a7a;
`

export const Icon = styled('img')<{ title: string }>`
    width: 20px;
    height: 20px;
    margin-top: -40px;
    margin-right: -10px;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.1)
    }
`