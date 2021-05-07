import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../../recoil/atoms/todos';
import { TodoItemType } from '../../../types/interfaces';
import TodoItem from './../TodoItem';
import classes from './index.module.css';

const TodoList: FC = () => {
	// Returns the value of an atom or selector (readonly or writeable) and subscribes the components to future updates of that state.
	const items = useRecoilValue<TodoItemType[]>(todoListState);

	return (
		<ul className={classes.items}>
			{items.map((item, i) => (
				<TodoItem key={item.id} item={item}>
					{item.text}
				</TodoItem>
			))}
		</ul>
	);
};

export default TodoList;
