import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { sortTodoListByStatusSelector, todoListStatsSelector } from '../../../recoil/selectors/todos';
import TodoItem from './../TodoItem';
import classes from './index.module.css';

const TodoList: FC = () => {
	// Returns the value of an atom or selector (readonly or writeable) and subscribes the components to future updates of that state.
	const sortedItemsByStatus = useRecoilValue(sortTodoListByStatusSelector);
	const { totalNum, totalUncompletedNum, totalCompletedNum, percentCompleted } = useRecoilValue(todoListStatsSelector);

	return (
		<div className={classes.items}>
			{sortedItemsByStatus.length ? (
				sortedItemsByStatus.map((item, i) => (
					<TodoItem key={item.id} item={item}>
						{item.text}
					</TodoItem>
				))
			) : (
				<span>TodoList is empty</span>
			)}
			<div className={classes.stats}>
				<span>Total items: {totalNum}</span>
				<span>Completed: {totalCompletedNum}</span>
				<span>Items not completed: {totalUncompletedNum}</span>
				<span>Percent completed: {percentCompleted}</span>
			</div>
		</div>
	);
};

export default TodoList;
