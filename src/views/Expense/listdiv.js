const Listdiv = ({ text, amount }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h4 style={{ marginBottom: -5 }}>{text}</h4>
      <h4>{amount}</h4>
    </div>
  );
};
//  Listdiv.def
export default Listdiv;
