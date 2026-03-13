const IcCollection = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      width={props.width}
      style={{
        minWidth: "2.4rem",
      }}
    >
      <path
        d="m15.2929 12-3.1465-3.14645c-.1952-.19526-.1952-.51184 0-.7071.1953-.19527.5119-.19527.7072 0l4 3.99995c.1952.1953.1952.5119 0 .7072l-4 4c-.1953.1952-.5119.1952-.7072 0-.1952-.1953-.1952-.5119 0-.7072l3.1465-3.1464h-10.7929c-.27614 0-.5-.2239-.5-.5s.22386-.5.5-.5zm3.7071-6.5c0-.27614.2239-.5.5-.5s.5.22386.5.5v14c0 .2761-.2239.5-.5.5s-.5-.2239-.5-.5z"
        fill={props.color}
      />
    </svg>
  );
};

export default IcCollection;
