interface TextFieldProps {
  id: string;
  name: string;
  textarea?: boolean;
  placeholder: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error: boolean;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  const { error, textarea } = props;

  return (
    <div className="relative flex-1">
      {textarea ? (
        <textarea
          {...props}
          className={`border-1 w-full cursor-pointer rounded border border-solid text-black placeholder:text-black placeholder:text-opacity-25 focus:outline-none  dark:bg-dark-gray dark:text-white dark:placeholder:text-white  dark:placeholder:text-opacity-25 ${error ? "border-red" : "border-lines-light focus:border-main-purple dark:border-lines-dark dark:focus:border-main-purple"} h-24 resize-none px-4 py-2`}
        />
      ) : (
        <input
          {...props}
          className={`border-1 w-full cursor-pointer rounded border border-solid text-black placeholder:text-black placeholder:text-opacity-25 focus:outline-none dark:bg-dark-gray dark:text-white  dark:placeholder:text-white dark:placeholder:text-opacity-25 ${error ? "border-red" : "border-lines-light focus:border-main-purple dark:border-lines-dark dark:focus:border-main-purple"} px-4 py-2`}
        />
      )}
      {error && (
        <div
          className={`absolute ${textarea ? "bottom-4" : "bottom-2"} right-4 text-red`}
        >
          Can't be empty!
        </div>
      )}
    </div>
  );
};

export default TextField;
