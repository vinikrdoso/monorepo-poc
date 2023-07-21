interface Props {
  label?: string;
  htmlFor?: string;
  helperText?: string;
  onChange?: (event: any) => void;
  value?: string;
}

export const DatePicker = ({ label, htmlFor, helperText, onChange, value }: Props) => {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor={htmlFor}>{label}</label>
      <input
          className="mt-2 border-solid border-gray-300 border py-2 px-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-500"
          id="createdAt"
          type="date"
          onChange={onChange}
          value={value}
      />
      {helperText && (
        <p className="text-red-700 mt-1">
            {helperText}
        </p>
      )}
  </div>
  )
};
