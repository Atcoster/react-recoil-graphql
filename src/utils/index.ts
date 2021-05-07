import { TodoItemType } from '../types/interfaces';

export function replaceItemAtIndex(arr: TodoItemType[], index: number, newValue: TodoItemType): TodoItemType[] {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function removeItemAtIndex(arr: TodoItemType[], index: number): TodoItemType[] {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
