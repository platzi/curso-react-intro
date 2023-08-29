import "./SectionContainer.css";

function SectionContainer({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

export { SectionContainer };
