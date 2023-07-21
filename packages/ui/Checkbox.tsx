interface Props {
  label?: string;
  htmlFor?: string;
  helperText?: string;
  onChange?: (event: any) => void;
  value?: string;
  id?: string;
}

export const Checkbox = ({ id, label, helperText, value, onChange, htmlFor }: Props) => {
  return (
    <div className="mt-4">
      <label htmlFor={htmlFor}>{label}</label>
      <input
          className="ml-2"
          id={id}
          type="checkbox"
          value={value}
          onChange={onChange}
      />
      {helperText && (
        <p className="text-red-700 mt-1">
            {helperText}
        </p>
      )}
    </div>
  );
};
