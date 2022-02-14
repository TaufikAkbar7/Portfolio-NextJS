const Judul = ({ text, fontSize, fontWeight, marginTop, color }) => {
  return (
    <h2 className={`${fontSize} ${fontWeight} ${marginTop} ${color}`}>{text}</h2>
  );
};

export default Judul;
