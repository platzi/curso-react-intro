import { ImgItem } from "./../ImgItem/ImgItem.js";
import { SimpleText } from "./../SimpleText/SimpleText.js";
import check from "./check.svg";

import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <div className="TodoItem">
      <div className="TodoItem--checkbox" onClick={onComplete}>
        <ImgItem
          className={`check-img ${!completed ? "inactive" : ""}`}
          url={check}
          onComplete={onComplete}
          alt={text}
        />
      </div>
      <div className="TodoItem--textbox">
        <SimpleText
          type={`light-text ${completed ? "crossed-line" : ""}`}
          text={`${text}`}
        />
      </div>
      <div className="TodoItem--delete" onClick={onDelete}></div>
    </div>
  );
}

export { TodoItem };
