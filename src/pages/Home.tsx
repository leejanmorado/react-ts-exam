import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  DateFilter,
  Modal,
  NameOrGroupFilter,
  Table,
  TablePagination,
} from "../components";
import { deleteEntryRequest, getEntriesRequest } from "../mock-requests";
import { Entry, Filters } from "../interfaces/index";
import { useEffect, useState } from "react";

const Home = () => {
  const fetchEntries = async (): Promise<Entry[] | null> => {
    return await getEntriesRequest();
  };

  const deleteEntry = async (id: string): Promise<void> => {
    await deleteEntryRequest(id);
  };

  const getTotalDebit = (): string => {
    return ("PHP " +
      entries
        ?.reduce((sum, nextEntry) => {
          if (nextEntry.type === "Debit") {
            return sum + nextEntry.amount;
          } else {
            return sum;
          }
        }, 0)
        .toFixed(2)) as string;
  };

  const getTotalCredit = (): string => {
    return ("PHP " +
      entries
        ?.reduce((sum, nextEntry) => {
          if (nextEntry.type === "Credit") {
            return sum + nextEntry.amount;
          } else {
            return sum;
          }
        }, 0)
        .toFixed(2)) as string;
  };

  const paginate = (
    array: Entry[] | undefined,
    pageSize: number,
    pageNumber: number
  ): Entry[] | undefined => {
    let result = array?.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );

    return result;
  };

  const queryClient = useQueryClient();

  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState<Filters>({
    nameOrGroup: undefined,
    date: undefined,
  });

  const { data: entries, isLoading } = useQuery("entries", fetchEntries, {
    select: (entries) =>
      entries?.filter((entry) => {
        return filters.nameOrGroup
          ? entry.name
              .toLowerCase()
              .includes(filters.nameOrGroup.toLowerCase()) ||
              entry.group
                .toLowerCase()
                .includes(filters.nameOrGroup.toLowerCase())
          : entry;
      }),
  });

  const { mutate: deleteMutation, isLoading: isDeleteLoading } = useMutation(
    deleteEntry,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("entries");
      },
      retry: 3,
    }
  );

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="home">
      {isLoading ? (
        <div className="loader center"></div>
      ) : (
        <div>
          <div className="table-functions-container">
            <div className="table-function">
              <label htmlFor="total-debit">Total Debit</label>
              <input
                id="total-debit"
                type="text"
                readOnly
                value={getTotalDebit()}
              />
            </div>
            <div className="table-function">
              <label htmlFor="total-credit">Total Credit</label>
              <input
                id="total-credit"
                type="text"
                readOnly
                value={getTotalCredit()}
              />
            </div>
            <div className="table-function">
              {/* NOT WORKING */}
              <DateFilter />
            </div>
            <div className="table-function">
              <NameOrGroupFilter value={filters} setValue={setFilters} />
            </div>
            <div className="create">
              <Modal show={show} handleClose={hideModal}>
                <p>Modal</p>
              </Modal>
              <button type="button" onClick={showModal}>
                Create New +
              </button>
            </div>
          </div>
          <Table
            onDeleteClick={deleteMutation}
            isDeleteLoading={isDeleteLoading}
            entries={paginate(entries as Entry[], 5, page)}
          />
          {entries?.length ? (
            <TablePagination
              currentPage={page}
              setCurrentPage={setPage}
              pageCount={entries.length / 5}
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Home;
