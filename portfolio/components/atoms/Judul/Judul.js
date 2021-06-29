const Judul = ({ text, fontSize, fontWeight, marginTop }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${marginTop}`}>
      <h1 className={`${fontSize} ${fontWeight} text-gray-200`}>{text}</h1>
    </div>
  );
};

export default Judul;
