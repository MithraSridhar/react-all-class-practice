import { useState } from "react";
import { ColorBox } from './ColorBox';

export function AddColor() {

  // let color = "skyblue"
  const [color, setColor] = useState("skyblue");

  // const colorList = ["orange", "red", "pink", "green"]
  const [colorList, setColorList] = useState(["orange", "red", "pink", "green"]);
  const styles = {
    fontSize: "20px",
    backgroundColor: color
  };
  return (
    <div>
      <div className='add-color'>
        <input style={styles} type="text" value={color}
          onChange={(event) => setColor(event.target.value)} />
        <button
          //copy the colorList and add newColor to it
          onClick={() => {
            setColorList([...colorList, color]);
            console.log(colorList);
          }}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}


    </div>
  );
}
