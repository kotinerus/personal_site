import "./textContentStyles.css";

export function TextContent({
  children,

  textColor = "#f0ebd8",
}) {
  return (
    <div className="textContentDiv" style={{ color: textColor }}>
      {children}
    </div>
  );
}
export function Row({ children }) {
  return <div className="row">{children}</div>;
}
