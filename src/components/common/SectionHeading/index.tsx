interface Props {
  heading: string;
  action?: string;
}

const SectionHeading = ({ heading, action }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <p className="py-6 text-3xl font-bold">{heading}</p>
      {action && (
        <button className="font-semibold text-indigo-600">{action}</button>
      )}
    </div>
  );
};
export default SectionHeading;
