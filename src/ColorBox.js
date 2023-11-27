export function ColorBox({ color }) {

  const styles = {
    fontSize: "20px",
    backgroundColor: color,
    height: "30px",
    width: "255px",
    marginTop: "10px",
  };

  return (
    <div style={styles}></div>
  );
}
