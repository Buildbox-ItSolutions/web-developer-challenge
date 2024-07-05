import { useFormModel } from "./model";
import { FormView } from "./view";

export const Form = () => {
  const postsModel = useFormModel();
  return <FormView {...postsModel} />;
};
