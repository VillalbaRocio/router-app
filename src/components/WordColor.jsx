import React from "react";
import { useParams } from "react-router-dom";
import "./WordColor.css";

const WordColor = () => {
  const { word, textColor, bgColor } = useParams();
  const style = textColor && bgColor ? { color: textColor, backgroundColor: bgColor } : {};
  return (
    <div className="word-color" style={style}>
      <h1>The word is: {word}</h1>
    </div>
  );
}

export default WordColor;