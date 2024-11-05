import { atom } from "recoil";

export interface ToDo {
  id: number;
  text: string;
}

interface ToDoState {
  [key: string]: ToDo[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    ToDo: [
      { id: 1, text: "Hello" },
      { id: 2, text: "World" },
    ],
    Doing: [],
    Done: [],
  },
});
