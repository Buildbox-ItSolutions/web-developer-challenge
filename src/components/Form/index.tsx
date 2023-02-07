import { Image } from "../ImageUploading";
import { Input } from "../Input";
import { FormContainer } from "./styles";

export function Form() {
  return (
    <FormContainer>
      <div className="formContent">
        <Image value={[]} onChange={() => {}} />
        <Input height={2.5} placeholder="Digite seu nome" maxLength={45} />
        <Input height={5} placeholder="Mensagem" />
      </div>
    </FormContainer>
  );
}
