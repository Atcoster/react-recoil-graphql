export type TodoItemType = {
	id: string;
	text: string;
	isComplete: boolean;
};

export enum FilteredTodo {
	ALL = 'Show All',
	COMPLETED = 'Show Completed',
	UNCOMPLETED = 'Show UnCompleted',
}
