const Judul = ({ text, fontSize, fontWeight, marginTop, color }) => {
  return (
    <h1 className={`${fontSize} ${fontWeight} ${marginTop} ${color}`}>{text}</h1>
  );
};

export default Judul;
