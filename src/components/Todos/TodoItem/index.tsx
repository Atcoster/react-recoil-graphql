import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../../recoil/atoms/todos';
import { TodoItemType } from '../../../types/interfaces';
import { replaceItemAtIndex, removeItemAtIndex } from '../../../utils';
import classes from './index.module.css';

interface Props {
	item: TodoItemType;
}

const TodoItem: FC<Props> = ({ item }) => {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: event.target.value,
		});

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	const deleteItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	return (
		<div className={classes.item}>
			<input className={classes.checkBox} type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
			<input
				className={classes.textInput}
				type="text"
				value={item.text}
				onChange={editItemText}
				readOnly={item.isComplete}
				style={{ backgroundColor: item.isComplete ? '#ddd' : '#fff' }}
			/>
			<button className={classes.deleteButton} onClick={deleteItem}>
				Delete
			</button>
		</div>
	);
};

export default TodoItem;
