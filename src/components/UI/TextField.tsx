const TextField = () => {
  const error = false;

  return (
    <input
      className={`border-1 w-full rounded border border-solid focus:outline-none ${error ? "border-red" : "border-lines-light"} px-4 py-2`}
    />
  );
};

export default TextField;
