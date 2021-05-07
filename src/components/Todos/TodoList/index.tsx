import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListSelector } from '../../../recoil/selectors/todos';
import { TodoItemType } from '../../../types/interfaces';
import TodoItem from './../TodoItem';
import classes from './index.module.css';

const TodoList: FC = () => {
	// Returns the value of an atom or selector (readonly or writeable) and subscribes the components to future updates of that state.
	const items = useRecoilValue<TodoItemType[]>(filteredTodoListSelector);
	const sortedItemsByStatus = [...items].sort((a, b) => {
		return Number(a.isComplete) - Number(b.isComplete);
	});

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
		</div>
	);
};

export default TodoList;
