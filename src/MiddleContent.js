import TopCards from "./TopCards";
import BottomCards from "./BottomCards";
export default function MiddleContent() {
  const MiddleContenStyle = {
    // border: "1px solid black",
    height: "100%",
    width: "55%",
    //width: "70%",
    display: "flex",
    flexDirection: "column",
    minHeight: "20rem",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "1rem",
    transition: "0.5s ease-in-out",
    //margin: "50px 221.7px",
    margin: "50px 228.5px",
  };

  const contentContainer = {
    position: "relative",
    right: "3rem",
  };
  return (
    <div style={MiddleContenStyle}>
      <div style={contentContainer}>
        <TopCards />
        <BottomCards />
      </div>
    </div>
  );
}
