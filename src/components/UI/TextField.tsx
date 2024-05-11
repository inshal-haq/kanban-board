const TextField = ({ id, error, textarea, ...props }) => {
  return (
    <div className="relative">
      {textarea && (
        <textarea
          id={id}
          {...props}
          className={`border-1 w-full rounded border border-solid text-black placeholder:text-black placeholder:text-opacity-25 focus:outline-none ${error ? "border-red" : "border-lines-light"} h-24 resize-none px-4 py-2`}
        />
      )}
      {!textarea && (
        <input
          id={id}
          {...props}
          className={`border-1 w-full rounded border border-solid text-black placeholder:text-black placeholder:text-opacity-25 focus:outline-none ${error ? "border-red" : "border-lines-light"} px-4 py-2`}
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
