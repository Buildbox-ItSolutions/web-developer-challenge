import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';
import AddImage from '../AddImage';

type Props = {
  control: Control<FieldValues, object>;
  name: string;
  defaultValue?: File;
};

const AddImageControl: React.FC<Props> = ({ control, name, defaultValue }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <AddImage name={name} image={value} onChange={onChange} />
      )}
    />
  );
};

export default AddImageControl;
