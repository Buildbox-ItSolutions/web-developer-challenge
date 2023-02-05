import * as yup from "yup";

export const FormPostSchema = yup.object().shape({
  name: yup.string().required(),
  post: yup.string().required(),
  fileUrl: yup.string().required(),
});
