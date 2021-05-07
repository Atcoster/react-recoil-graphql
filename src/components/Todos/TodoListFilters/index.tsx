import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../../recoil/atoms/todos';
import { FilteredTodo } from '../../../types/interfaces';
import classes from './index.module.css';

const TodoListFilters: FC = () => {
	const [filter, setFilter] = useRecoilState(todoListFilterState);

	const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(event.target.value);
	};

	console.log(filter);
	return (
		<div className={classes.filters}>
			<span>Filter:</span>
			<select className={classes.select} value={filter} onChange={updateFilter}>
				<option value={FilteredTodo.ALL}>All</option>
				<option value={FilteredTodo.COMPLETED}>Completed</option>
				<option value={FilteredTodo.UNCOMPLETED}>Uncompleted</option>
			</select>
		</div>
	);
};

export default TodoListFilters;
