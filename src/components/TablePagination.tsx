interface TablePaginationProps {
  pageCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const TablePagination: React.FunctionComponent<TablePaginationProps> = ({
  pageCount,
  currentPage,
  setCurrentPage,
}) => {
  const getPages = () =>
    [...Array(Math.ceil(pageCount)).keys()].map((page) => (
      <span
        onClick={() => setCurrentPage(page + 1)}
        key={page}
        className={`page ${currentPage === page + 1 ? "active-page" : null}`}
      >
        {page + 1}
      </span>
    ));

  return <div className="table-pagination">{getPages()}</div>;
};

export default TablePagination;
