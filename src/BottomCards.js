export default function BottomCards() {
  const sectionStyle = {
    display: "flex",

    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    textALign: "center",
    width: "100%",
    padding: "2.5rem 1rem 0rem 1rem",
    transition: "0.5s ease-in-out",
    overFlow: "hidden",
    /*marginLeft: "35rem",
        marginTop: "4rem", */
  };

  const bottomCardStyle = {
    padding: "1rem 2rem 3rem 2rem",
    borderRadius: "1rem",
    backgroundColor: "#DAC0A3",
    color: "black",
    width: "100%",
    textALign: " center",
    position: "relative",
    left: "3rem",
    top: "1.5rem",
    margin: "1px 2px 5px 2px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s ease-in-out",
    cursor: "pointer",
  };

  return (
    <div>
      <section style={sectionStyle}>
        <div style={bottomCardStyle}>
          <h2>Top spending categories</h2>
          <p>Track your spending by category to identify areas where you can</p>
          <p>cut back. Set spending goals for each category.</p>
        </div>
      </section>
      <section style={sectionStyle}>
        <div style={bottomCardStyle}>
          <h2>Debt management tips</h2>
          <p>Get tips on how to pay off debt faster.</p>
          <p>Prioritize paying off high-interest debt first.</p>
        </div>
      </section>
    </div>
  );
}
