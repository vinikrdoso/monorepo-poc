"use client";

import { Controller } from "react-hook-form";
import { DatePicker } from 'ui';

export const FormDatepicker = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <DatePicker
          helperText={error ? error.message : null}
          onChange={onChange}
          value={value}
          label={label}
        />
      )}
    />
  );
};