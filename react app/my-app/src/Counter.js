import { useState } from "react";

export function Counter() {

  const [like, setLike] = useState(10);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => {
        setLike(like + 1);
        console.log(like);
      }}>👍{like}</button>

      <button onClick={() => {
        setDisLike(disLike + 1);
      }}>👎{disLike}</button>

    </div>
  );
}
