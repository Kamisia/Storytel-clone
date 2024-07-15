import React from "react";

interface InputProps {}

const Input: React.FC<InputProps> = ({}) => {
  return (
    <div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="#5c5c5cff"
          viewBox="0 0 18 18"
        >
          <path d="M7.351 14.563a7.375 7.375 0 0 0 4.273-1.364l4.531 4.489c.21.208.488.312.784.312.621 0 1.061-.473 1.061-1.08 0-.284-.096-.549-.306-.757l-4.502-4.47a7.208 7.208 0 0 0 1.51-4.412C14.702 3.276 11.395 0 7.351 0 3.307 0 0 3.276 0 7.281c0 4.006 3.307 7.282 7.351 7.282Zm0-1.572c-3.154 0-5.764-2.585-5.764-5.71 0-3.124 2.61-5.71 5.764-5.71 3.155 0 5.764 2.586 5.764 5.71 0 3.125-2.61 5.71-5.764 5.71Z"></path>
        </svg>
      </div>
      <input
        placeholder="Wyszukaj tytuł książki, serii, podcastu, jej autora, narratora lub odpowiedni tag."
        value=""
      ></input>
    </div>
  );
};

export default Input;
