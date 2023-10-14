export default function SideBarUnit({ children }) {
  const styles = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    backgroundColor: "transparent",
    hover: {
      backgroundColor: "#ccc",
      transition: "0.5s",
    },
    position: "relative",
    top: "2rem",
    margin: "10px",
    paddingTop: "10px",
    cursor: "pointer",
  };
  return <li style={styles}>{children}</li>;
}
