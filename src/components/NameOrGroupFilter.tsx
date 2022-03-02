import { useState } from "react";
import { Filters } from "../interfaces";

interface NameOrGroupFilterProps {
  value: Filters;
  setValue: React.Dispatch<React.SetStateAction<Filters>>;
}

const NameOrGroupFilter: React.FunctionComponent<NameOrGroupFilterProps> = ({
  value,
  setValue,
}) => {
  return (
    <>
      <label htmlFor="search">Search Name or Group</label>
      <input
        id="search"
        type="text"
        value={value.nameOrGroup ?? ""}
        onChange={(e) => setValue({ ...value, nameOrGroup: e.target.value })}
      />
    </>
  );
};

export default NameOrGroupFilter;
