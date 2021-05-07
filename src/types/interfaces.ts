export type TodoItemType = {
	id: string;
	text: string;
	isComplete: boolean;
};

export enum FilteredTodo {
	ALL = 'All',
	COMPLETED = 'Completed',
	UNCOMPLETED = 'UnCompleted',
}
