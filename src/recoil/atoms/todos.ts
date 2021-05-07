import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { TodoItemType } from '../../types/interfaces';

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
