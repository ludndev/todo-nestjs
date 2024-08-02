interface TimeStamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface Todo extends TimeStamps {
  id: number;
  content: string;
  status: boolean;
}
