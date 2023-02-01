export interface IFormProps {
  name?: string,
  onChangeInput?: React.ChangeEventHandler<HTMLInputElement>,
  onChangeTextArea?: React.ChangeEventHandler<HTMLTextAreaElement>
  id?: string,
  value?: string,
  type?: string,
  placeholder?: string
}