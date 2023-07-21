"use client";

import { Controller } from "react-hook-form";
import { Checkbox } from 'ui';

export const FormCheckbox = ({ name, control, label, id }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <Checkbox
          helperText={error ? error.message : null}
          id={id}
          label={label}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};