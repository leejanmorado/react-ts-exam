import { Entry } from "../interfaces";

const addEntry = (entry: Entry): Promise<void> => {
  let entries: Entry[] = JSON.parse(localStorage.getItem('entries')!);
  let updatedEntries: Entry[] = [...entries, entry]

  localStorage.setItem('entries', JSON.stringify(updatedEntries));

  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
};

export default addEntry;