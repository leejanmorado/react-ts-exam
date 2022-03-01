import { SortButton } from ".";
import { Entry } from "../interfaces";

interface TableProps {
  entries: Entry[] | undefined;
  onDeleteClick: Function;
  isDeleteLoading: boolean;
}

const Table: React.FunctionComponent<TableProps> = ({
  entries,
  onDeleteClick,
  isDeleteLoading,
}): JSX.Element => {
  return (
    <table>
      <caption>Entries List</caption>
      <thead>
        <tr>
          <th scope="col">
            Date
            <SortButton />
          </th>
          <th scope="col">
            Group
            <SortButton />
          </th>
          <th scope="col">
            Name
            <SortButton />
          </th>
          <th scope="col">
            Debit
            <SortButton />
          </th>
          <th scope="col">
            Credit
            <SortButton />
          </th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {entries?.map((entry) => {
          return (
            <tr key={entry.id}>
              <td data-label="Date">{new Date(entry.date).toDateString()}</td>
              <td data-label="Group">{entry.group}</td>
              <td data-label="Name">{entry.name}</td>
              <td data-label="Debit">
                {entry.type === "Debit" ? (
                  "PHP " + entry.amount.toFixed(2)
                ) : (
                  <>&nbsp;</>
                )}
              </td>
              <td data-label="Credit">
                {entry.type === "Credit" ? (
                  "PHP " + entry.amount.toFixed(2)
                ) : (
                  <>&nbsp;</>
                )}
              </td>
              <td data-label="Actions">
                <span className="action-button edit" onClick={() => {}}>
                  EDIT
                </span>
                <span style={{ color: `#696e79` }}>|</span>
                <span
                  className="action-button delete"
                  onClick={() => onDeleteClick(entry.id)}
                >
                  DELETE
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
