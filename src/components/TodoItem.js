import { ImgItem } from "./ImgItem";
import { SimpleText } from "./SimpleText";
import check from "./../img/check.svg";

import "./../css/TodoItem.css";

function TodoItem({ text, completed }) {
  return (
    <div className="TodoItem">
      <div className="TodoItem--checkbox">
        <ImgItem className={"check-img"} url={check} />
      </div>
      <div className="TodoItem--textbox">
        <SimpleText type={"light-text"} text={`${text}`} />
      </div>
      <div className="TodoItem--delete"></div>
    </div>
  );
}

export { TodoItem };
