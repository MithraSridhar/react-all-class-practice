import { useEffect, useState } from "react";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';


export function Counter() {
  // let like = 10
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  // console.log("previous value", like)

  //Below both are same as if we didn't apply dep.array it gets applied to all states by default
useEffect(()=>{
console.log("Total clicks ",like +dislike)
},[like,dislike])


// useEffect(()=>{
//   console.log("Total clicks ",like +dislike)
//   })
  

  return (
    <div>
      {/* onClick => camelCase */}

      <IconButton aria-label="likeButton" onClick={() => {
        setLike(like + 1);
        console.log(like);
      }} color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      {/* <button onClick={() => {
        setLike(like + 1);
        console.log(like);
      }}>👍 {like}</button> */}


      <IconButton aria-label="dislikeButton" onClick={() => {
        setDislike(dislike + 1);
        console.log(dislike);
      }} color="error">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>


      {/* create dislike button */}
      {/* <button onClick={() => {
        setDislike(dislike + 1);
        console.log(dislike);
      }}>👎 {dislike}</button> */}

    </div>
  );
}
