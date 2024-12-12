import tw from 'twin.macro'
import React from "react";
import Section from "../Section";
import Box from "../Box";
import {
    Formik,
    Form
} from 'formik';
import ImgPlaceholder from '../../assets/image_placeholder.svg';
import FeedItem from '../../model/FeedItem';
import { useFeedStore } from '../../data/FeedStore';
import { FormGroup, FormInput, BaseButton } from './Shared';
import ImageInput from './ImageInput'
import ActionsInput from './Actions';

const FormStyled = tw(Form)`
    flex
    flex-col
`;


const FormComponent: React.FC<{}> = () => {
    const addItem = useFeedStore(state => state.addItem);

    return <Section>
        <Box>
            <Formik
                initialValues={{
                    name: "",
                    image: ImgPlaceholder,
                    comment: "",
                }}

                onSubmit={(values: FeedItem, actions) => {
                    addItem(values);
                    actions.resetForm();
                }}
            >
                <FormStyled>
                    <ImageInput />

                    <FormGroup>
                        <FormInput name={"name"} placeholder={"Digite seu nome"} />
                    </FormGroup>

                    <FormGroup>
                        <FormInput css={`resize: none;`} name={"comment"} component={"textarea"} placeholder={"Mensagem"} />
                    </FormGroup>

                    <ActionsInput />
                </FormStyled>
            </Formik>
        </Box>
    </Section>
};

export default FormComponent;
