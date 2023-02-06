import * as Yup from "yup";

import {
  Post,
} from "../types";

const requiredFieldMessage = "Campo Obrigatório";

export const PostSchema: Yup.SchemaOf<Post> =
  Yup.object().shape({
    picture: Yup.mixed().test('required', requiredFieldMessage, ( files: FileList ) => files?.length > 0 ),

    name: Yup.string().required( requiredFieldMessage ),

    message: Yup.string().required( requiredFieldMessage ),
  });
