interface Props {
  children?: React.ReactNode;
}

export const Form = ({ children }: Props) => {
  return (
    <div 
      className="flex flex-col mt-10 bg-white px-4 py-5 shadow rounded-lg sm:m-6 sm:p-6 w-full lg:w-3/6 text-gray-600"
    >
      {children}
    </div>
  );
};
