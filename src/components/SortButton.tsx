import Sort from "../assets/sort.png";

const SortButton = () => {
  return (
    <img
      src={Sort}
      alt="Sort"
      style={{
        height: "1em",
        width: "1em",
        marginLeft: "1em",
        filter: "invert(1)",
      }}
    />
  );
};

export default SortButton;
