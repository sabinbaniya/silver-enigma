const Tabs = () => {
  return (
    <>
      <div className="my-8 space-x-4 rounded-xl border border-gray-200 p-4">
        <button className="rounded-lg bg-blue-100 p-2 font-semibold text-blue-800">
          Portfolio
        </button>
        <button className="rounded-lg bg-gray-100 p-2 font-semibold text-gray-800">
          Resume
        </button>
      </div>
    </>
  );
};

export default Tabs;
