const Judul = ({ text, width, height, fontSize, fontWeight }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className={`${fontSize} ${fontWeight} text-gray-200`}>{text}</h1>
      <hr className={`${width} ${height} mt-3 border-4 border-blue-500`}/>
    </div>
  );
};

export default Judul;
