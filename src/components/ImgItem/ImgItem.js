import "./ImgItem.css";

function ImgItem({ url, className, onComplete, alt }) {
  return <img src={`${url}`} className={`${className}`} alt={`${alt}`} />;
}

export { ImgItem };
