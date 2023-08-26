import "./../css/ImgItem.css";

function ImgItem({ url, className }) {
  return <img src={`${url}`} className={`${className}`} />;
}

export { ImgItem };
