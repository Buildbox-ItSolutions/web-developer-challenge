import * as yup from "yup";

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Nome necessário!")
        .min(3, "Mínimo 3 caracteres."),
    message: yup
        .string()
        .required("Mensagem necessário!"),
});

export default schema;