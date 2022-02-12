import React from 'react';
import { Controller, UseControllerProps } from 'react-hook-form';
import AddImage from '../AddImage';

const AddImageControl: React.FC<Omit<UseControllerProps, 'render'>> = ({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => (
        <AddImage name={name} image={value} onChange={onChange} />
      )}
    />
  );
};

export default AddImageControl;
