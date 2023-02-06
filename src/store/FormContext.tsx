import React, { createContext, FC, useContext, useState } from "react";
import { FormContextProps } from "../types/store";

const FormContext = createContext<FormContextProps>({} as FormContextProps);

const FormContextProvider: FC<{ children: JSX.Element }> = (props) => {
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [newFile, setNewFile] = useState<File | undefined>(undefined);
  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    setNewFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => setFilePreview(e.target?.result as string);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleRemoveImage = () => {
    setNewFile(undefined);
    setFilePreview(undefined);
  };
  const clearForm = () => {
    setNewFile(undefined);
    setFilePreview(undefined);
    setNewName("");
    setNewMessage("");
  };

  return (
    <FormContext.Provider
      value={{
        newName,
        setNewName,
        newMessage,
        setNewMessage,
        newFile,
        setNewFile,
        filePreview,
        setFilePreview,
        handleUploadImage,
        handleRemoveImage,
        clearForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

const useFormContext = () => useContext(FormContext);

export { FormContextProvider, useFormContext };
