interface Props {
  heading: string;
  action?: string;
  centered?: boolean;
}

const SectionHeading = ({ heading, action, centered }: Props) => {
  return (
    <div
      className={`flex items-center ${
        centered ? "justify-center" : "justify-between"
      }`}
    >
      <p className="py-6 text-3xl font-bold">{heading}</p>
      {action && (
        <button className="font-semibold text-indigo-600">{action}</button>
      )}
    </div>
  );
};
export default SectionHeading;
