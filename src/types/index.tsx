export interface Note {
  title: string;
  desc: string;
  isDone: boolean;
}

export interface NoteData extends Note {
  category: string;
  createdAt: string;
  id: string;
}

export type Notes = {
  notes: NoteData[];
};

export interface SelectOption {
  value: string;
  label: string;
}
