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
				return get(completedTodoSelector);
			case FilteredTodo.UNCOMPLETED:
				return get(unCompletedTodoSelector);
			default:
				return list;
		}
	},
});

export const todoListStatsSelector = selector({
	key: 'todoListStatsSelector',
	get: ({ get }) => {
		const todoList = get(todoListState);
		const totalNum = todoList.length;
		const totalCompletedNum = get(completedTodoSelector).length;
		const totalUncompletedNum = totalNum - totalCompletedNum; // OR get(unCompletedTodoSelector).length
		const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

		return {
			totalNum,
			totalCompletedNum,
			totalUncompletedNum,
			percentCompleted,
		};
	},
});

export const sortTodoListByStatusSelector = selector({
	key: 'sortTodoListByStatusSelector',
	get: ({ get }) => {
		const filteredTodos = get(filteredTodoListSelector);
		const sortedTodos = [...filteredTodos].sort((a, b) => {
			return Number(a.isComplete) - Number(b.isComplete);
		});

		return sortedTodos;
	},
});
