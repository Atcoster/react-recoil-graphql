import { atom, selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { FakeTodoItemType, TodoItemType } from '../../types/interfaces';

export const todoListState = atom<TodoItemType[]>({
	key: 'todoListState',
	default: [
		{
			id: uuidv4(),
			text: 'Demo React/Recoil to the team',
			isComplete: true,
		},
	],
});

export const todoListFilterState = atom({
	key: 'todoListFilterState',
	default: 'Show All',
});

export const allFakeTodosState = selector({
	key: 'allUsersState',
	get: async ({ get }) => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data: FakeTodoItemType[] = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	},
});
