const InlineStyle = () => {
  let yellow = "yellow";
  return (
    <div
      style={{
        fontSize: "3rem",
        color: "red",
        border: "1px solid red",
        backgroundColor: "blue",
      }}
    >
      Bügün <span style={{ color: yellow }}>hava</span> serin
    </div>
  );
};

export default InlineStyle;
