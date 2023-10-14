export default function TopCards() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    position: "relative",
    top: "3rem",
    left: "3rem",
    cursor: "pointer",
    textAlign: "center",
    overFlow: "hidden",
  };

  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textAlign: " center",
    border: "1px solid black",
    borderRadius: "10px",
    margin: "1rem",
    width: "270px",
    height: "170px",
    position: "relative",
    top: "0rem",
    left: " 0rem",
    backgroundColor: "#96B6C5",
    padding: "0.5rem 1rem 0.5rem 1rem",
    transition: "0.5s ease-in-out",
    /*marginLeft: "35rem",
    marginTop: "4rem", */
  };

  /*  const firstContainerStyle = {
    padding: " 1rem 2rem 3rem 2rem",
    borderRadius: "1rem",
    backgroundColor: "#212121",
    color: "white",
  }; */

  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <div>
          <h3>Financial goals</h3>
          <h3>Set a financial goal for the week:</h3>
          <h3>Save $100</h3>
        </div>
      </section>
      <section style={sectionStyle}>
        <div>
          <h3>Insurance coverage</h3>
          <h3>Review your insurance </h3>
        </div>
      </section>
    </div>
  );
}
