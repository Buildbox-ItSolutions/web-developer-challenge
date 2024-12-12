import * as yup from "yup";

export const schema = yup.object({
  photo: yup.string().required(),
  name: yup.string().required(),
  message: yup.string().required(),
});
