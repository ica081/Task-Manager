// client/src/types.ts
export interface Task {
    _id: string;
    title: string;
    completed: boolean;
    createdAt: string;
  }
  
  export interface User {
    _id: string;
    username: string;
  }