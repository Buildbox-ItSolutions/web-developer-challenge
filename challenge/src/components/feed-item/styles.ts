import styled from '@emotion/styled'
import Grid from '@mui/material/Grid';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export const Container = styled(Grid)`
    margin-top: 16px;
`

export const Card = styled.div`
    border-radius: 3px;
    padding: 24px;
    padding-bottom: 32px;
    border: solid 1px #3b3b3b;
    background: #313131;
`

export const MessageContainer = styled.div`
    text-align: left;
    font-size: 16px;
    color: #9f9f9f;
    margin-top: 32px;
`

export const SendByContainer = styled.div`
    text-align: left;
    margin-top: 24px;
    font-size: 12px;
    color: #5f5f5f;
`

export const NameContainer = styled.div`
    text-align: left;
    margin-top: 2px;
    font-size: 14px;
    color: #7a7a7a;
`

export const CancelIcon = styled(CancelOutlinedIcon)`
    color: #d65923;
    cursor: pointer;
`