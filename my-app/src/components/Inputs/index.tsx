
import React from 'react';
import {Form} from 'react-bootstrap';
import { InputsProps } from '../../interfaces/interface';

export default function Inputs(props: InputsProps){
    return(
        <Form.Control
        type={props.file}
        placeholder={props.placeholder}
    />
    )
}