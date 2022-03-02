import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Entry, EntryType, ModalProps } from "../interfaces";
import { addEntryRequest } from "../mock-requests";
import Modal from "./Modal";
import { v4 as uuid } from "uuid";

interface EntryModalProps extends ModalProps {}

const EntryModal: React.FunctionComponent<EntryModalProps> = ({
  show,
  handleClose,
}) => {
  const defaultForm = {
    date: "",
    group: "",
    name: "",
    type: "Debit",
    amount: "",
  };

  const [form, setForm] = useState({
    ...defaultForm,
  });

  const addEntry = async (entry: Entry): Promise<void> => {
    await addEntryRequest(entry);
  };

  const queryClient = useQueryClient();

  const { mutate: addMutation } = useMutation(addEntry, {
    onSuccess: () => {
      queryClient.invalidateQueries("entries");
    },
    retry: 3,
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const newEntry = {
      ...form,
      id: uuid(),
      date: new Date(form.date),
      type: form.type as EntryType,
      amount: parseFloat(form.amount),
    };
    addMutation(newEntry);
    setForm({ ...defaultForm });
    handleClose(e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <Modal show={show} handleClose={handleClose}>
      <div className="input-field">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={form.date}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="group">Group</label>
        <input
          id="group"
          type="text"
          value={form.group}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          value={form.type}
          onChange={(e) => handleChange(e)}
        >
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>
      </div>
      <div className="input-field">
        <label htmlFor="amount">Amount</label>
        <input id="amount" type="number" onChange={(e) => handleChange(e)} />
      </div>
      <div className="button-group">
        <button className="button" onClick={handleClose}>
          Cancel
        </button>
        <button className="button" onClick={handleClick}>
          Save
        </button>
      </div>
    </Modal>
  );
};

export default EntryModal;
