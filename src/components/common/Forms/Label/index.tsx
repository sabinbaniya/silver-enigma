interface Props {
  text: string;
}
const Label = ({ text }: Props) => {
  return (
    <>
      <label htmlFor={text} className="font-semibold">
        {text}
      </label>
    </>
  );
};
export default Label;
