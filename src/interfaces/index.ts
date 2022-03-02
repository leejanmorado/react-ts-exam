export type EntryType = 'Debit' | 'Credit';

export interface Entry {
  id?: string;
  date: Date;
  group: string;
  name: string;
  type: EntryType;
  amount: number;
}

export interface ModalProps {
  handleClose: React.MouseEventHandler<HTMLElement>;
  show: boolean;
  children?: JSX.Element[] | JSX.Element
}

export interface Filters {
  nameOrGroup: string | undefined;
  date: Date | undefined;
}