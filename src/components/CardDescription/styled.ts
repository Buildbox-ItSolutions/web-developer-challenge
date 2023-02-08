import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 500px;
    min-height: 300px;
    margin: 30px 0px 20px 0px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
    padding: 16px;
`

const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    margin-top: 10px;
`

const Description = styled.div`
    padding: 0px 20px;
    font-size: 16px;
    width: 300px;
    text-align: start;
    word-wrap: break-word;
`

const Nameanddate = styled.p`
    font-size: 16px;
    text-align: start;
    margin-top: 20px;
    word-wrap: break-word;
`

const TitleName = styled.div`
    font-size: 14px;
    text-align: start;
    margin-top: 20px;
    white-space: nowrap;
`

const DeleteButton = styled.span`
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    border-radius: 5px;
    width: 100px;
    float: right;
    color: red;
    border: none;
    cursor: pointer;
    align-self: baseline;
`

export { Container, DeleteButton, Description, Image, TitleName, Nameanddate }
