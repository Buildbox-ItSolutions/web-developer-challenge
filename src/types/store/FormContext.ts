export type FormContextProps = {
  newName: string;
  setNewName: (value: string) => void;

  newMessage: string;
  setNewMessage: (value: string) => void;

  newFile: File | undefined;
  setNewFile: (value: File) => void;

  filePreview: string | undefined;
  setFilePreview: (value: string) => void;

  handleUploadImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
  clearForm: () => void;
};
