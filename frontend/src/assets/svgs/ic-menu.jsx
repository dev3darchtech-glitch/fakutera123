const IcMenu = (props) => {
  return (
    <svg
      stroke={props.color || "#fff"}
      fill={props.color || "#fff"}
      strokeWidth="0"
      viewBox="0 0 24 24"
      className="navigation-svg"
      height={props.size || "36px"}
      width={props.size || "36px"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
  );
};

export default IcMenu;
