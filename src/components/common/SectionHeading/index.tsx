interface Props {
  heading: string;
  action?: string;
}

const SectionHeading = ({ heading, action }: Props) => {
  return (
    <div>
      <p className="py-6 text-2xl font-bold">{heading}</p>
    </div>
  );
};
export default SectionHeading;
