import { ImgItem } from "./ImgItem";
import { SimpleText } from "./SimpleText";
import check from "./../img/check.svg";

import "./../css/TodoItem.css";

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
