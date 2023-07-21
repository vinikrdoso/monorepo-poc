"use client";

import { Controller } from "react-hook-form";
import { Input } from 'ui';

export const FormInputText = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <Input
          helperText={error ? error.message : null}
          // size="small"
          // error={!!error}
          onChange={onChange}
          value={value}
          // fullWidth
          label={label}
          // variant="outlined"
        />
      )}
    />
  );
};