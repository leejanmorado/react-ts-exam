import { Entry } from "../interfaces";

const deleteEntry = (id: string): Promise<void> => {
  let entries: Entry[] = JSON.parse(localStorage.getItem('entries')!);
  let updatedEntries: Entry[] = entries.filter(entry => {
    return entry.id !== id
  })

  localStorage.setItem('entries', JSON.stringify(updatedEntries));

  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
};

export default deleteEntry;