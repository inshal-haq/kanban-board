const TextField = ({ id, error, textarea, ...props }) => {
  return (
    <div className="relative flex-1">
      {textarea && (
        <textarea
          id={id}
          {...props}
          className={`border-1 w-full cursor-pointer rounded border border-solid text-black placeholder:text-black placeholder:text-opacity-25  focus:outline-none ${error ? "border-red" : "border-lines-light focus:border-main-purple"} h-24 resize-none px-4 py-2`}
        />
      )}
      {!textarea && (
        <input
          id={id}
          {...props}
          className={`border-1 w-full cursor-pointer rounded border border-solid text-black placeholder:text-black placeholder:text-opacity-25 focus:outline-none ${error ? "border-red" : "border-lines-light focus:border-main-purple"} px-4 py-2`}
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
