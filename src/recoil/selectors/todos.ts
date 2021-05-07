import { selector } from 'recoil';
import { FilteredTodo } from '../../types/interfaces';
import { todoListState, todoListFilterState } from '../atoms/todos';

// Selectors are pure functions, and we use them to pull data from atoms or even other selectors
// Return uncompleted todo from the list
export const unCompletedTodoSelector = selector({
	key: 'unCompletedTodoSelector',
	get: ({ get }) => {
		const items = get(todoListState);
		return items.filter((item) => !item.isComplete);
	},
});

// return completed todo from the list
export const completedTodoSelector = selector({
	key: 'completedTodoSelector',
	get: ({ get }) => {
		const items = get(todoListState);
		return items.filter((item) => item.isComplete);
	},
});

export const filteredTodoListSelector = selector({
	key: 'filteredTodoListSelector',
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case FilteredTodo.COMPLETED:
				return ;
			case FilteredTodo.UNCOMPLETED:
				return list.filter((item) => !item.isComplete);
			default:
				return list;
		}
	},
});
