interface Props {
  placeholder: string;
  as?: "input" | "textarea";
  type?: "text" | "date";
}

const Input = ({ placeholder, as = "input", type = "text" }: Props) => {
  const Component = as;
  return (
    <>
      <Component
        type={type}
        placeholder={placeholder}
        className={`rounded-lg border-2 border-gray-200 px-4 transition-[border] focus:border-gray-400 focus:outline-none ${
          as === "textarea" ? "h-24 resize-none py-4" : "h-12 "
        }`}
      />
    </>
  );
};

export default Input;
