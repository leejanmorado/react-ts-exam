import { Entry } from '../interfaces/index';
import { v4 as uuid } from 'uuid';

const getEntries = (): Promise<Entry[] | null> => {
  let entries = localStorage.getItem('entries');
  const mockEntries: Entry[] = [
    { id: uuid(), date: new Date(), group: 'Income', name: 'Feb Salary', type: 'Credit', amount: 3000 },
    { id: uuid(), date: new Date(), group: 'Self Improvement', name: 'Udemy - Purchased React Tutorial', type: 'Debit', amount: 69 },
    { id: uuid(), date: new Date(), group: 'Utilities', name: 'Electricity', type: 'Debit', amount: 420 },
    { id: uuid(), date: new Date(), group: 'Income', name: 'Feb Salary', type: 'Credit', amount: 3000 },
    { id: uuid(), date: new Date(), group: 'Self Improvement', name: 'Udemy - Purchased React Tutorial', type: 'Debit', amount: 69 },
    { id: uuid(), date: new Date(), group: 'Utilities', name: 'Electricity', type: 'Debit', amount: 420 },
    { id: uuid(), date: new Date(), group: 'Income', name: 'Feb Salary', type: 'Credit', amount: 3000 },
    { id: uuid(), date: new Date(), group: 'Self Improvement', name: 'Udemy - Purchased React Tutorial', type: 'Debit', amount: 69 },
    { id: uuid(), date: new Date(), group: 'Utilities', name: 'Electricity', type: 'Debit', amount: 420 },
    { id: uuid(), date: new Date(), group: 'Income', name: 'Feb Salary', type: 'Credit', amount: 3000 },
    { id: uuid(), date: new Date(), group: 'Self Improvement', name: 'Udemy - Purchased React Tutorial', type: 'Debit', amount: 69 },
    { id: uuid(), date: new Date(), group: 'Utilities', name: 'Electricity', type: 'Debit', amount: 420 },
    { id: uuid(), date: new Date(), group: 'Income', name: 'Feb Salary', type: 'Credit', amount: 3000 },
    { id: uuid(), date: new Date(), group: 'Self Improvement', name: 'Udemy - Purchased React Tutorial', type: 'Debit', amount: 69 },
    { id: uuid(), date: new Date(), group: 'Utilities', name: 'Electricity', type: 'Debit', amount: 420 },
  ]

  if (!entries || JSON.parse(entries).length === 0) {
    localStorage.setItem('entries', JSON.stringify(mockEntries));
    entries = localStorage.getItem('entries');
  }

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(entries!))
    }, 2000)
  })
};

export default getEntries;