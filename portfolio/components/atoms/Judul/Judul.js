const Judul = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-gray-200 mt-5">{text}</h1>
      <hr className="w-40 mt-3 h-2 border-4 border-blue-500" />
    </div>
  );
};

export default Judul;
