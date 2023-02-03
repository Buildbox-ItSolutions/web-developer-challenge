import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .max(50)
    .required("Este campo é obrigatório")
    .typeError("Números não são aceitos neste campo"),
  userMessage: Yup.string().max(250).required("Este campo é obrigatório"),
});

export default validationSchema;
