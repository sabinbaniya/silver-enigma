interface Props {
  heading: string;
  action?: string;
  centered?: boolean;
  actionstyle?: 1 | 2;
}

const SectionHeading = ({
  heading,
  action,
  centered,
  actionstyle = 1,
}: Props) => {
  return (
    <div
      className={`flex items-center ${
        centered ? "justify-center" : "justify-between"
      }`}
    >
      <p className="py-6 text-3xl font-bold">{heading}</p>
      {action && (
        <button
          className={`font-semibold ${
            actionstyle === 1 ? "text-indigo-600" : "text-gray-400"
          }`}
        >
          {action}
        </button>
      )}
    </div>
  );
};
export default SectionHeading;
