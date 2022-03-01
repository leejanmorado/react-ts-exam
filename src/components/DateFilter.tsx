import { useRef, useState } from "react";

const DateFilter: React.FunctionComponent = (): JSX.Element => {
  const [dateRange, setDateRange] = useState({
    from: "",
    to: "",
  });

  const dateFromRef = useRef<HTMLInputElement>(null);
  const dateToRef = useRef<HTMLInputElement>(null);

  const displayValue = () => {
    if (dateRange.from === "" && dateRange.to === "") {
      return "";
    } else {
      return dateRange.from + " - " + dateRange.to;
    }
  };

  const handleClick = () => {
    dateFromRef.current?.focus();
    dateToRef.current?.focus();
  };

  const setDateFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange({ ...dateRange, from: e.target.value });
  };

  const setDateTo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange({ ...dateRange, to: e.target.value });
  };

  return (
    <>
      <label htmlFor="date-filter">Date Filter</label>
      <input
        id="date-filter"
        type="text"
        readOnly
        onClick={handleClick}
        value={displayValue()}
      />
      <input
        id="date-from"
        ref={dateFromRef}
        type="date"
        className="hidden"
        onChange={(e) => setDateFrom(e)}
      />
      <input
        id="date-to"
        ref={dateToRef}
        type="date"
        className="hidden"
        onChange={(e) => setDateTo(e)}
      />
    </>
  );
};

export default DateFilter;
