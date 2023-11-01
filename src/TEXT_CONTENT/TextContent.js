import "./textContentStyles.css";
export function TextContent({
  children,
  backgroundColor = "#3e5c76",
  textColor = "#f0ebd8",
}) {
  return (
    <div
      className="textContentDiv"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </div>
  );
}
export function Row({ children }) {
  return <div className="row">{children}</div>;
}
