import React, { FC, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { todoListState } from '../../../recoil/atoms/todos';
import { TodoItemType } from '../../../types/interfaces';
import classes from './index.module.css';

const TodoCreator: FC = () => {
	const [inputValue, setInputValue] = useState('');
	// Returns a setter function for updating Recoil state. Does not subscribe the component to the given state.
	const setTodoList = useSetRecoilState<TodoItemType[]>(todoListState);

	const addItem = () => {
		if (inputValue === '') return;
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: uuidv4(),
				text: inputValue,
				isComplete: false,
			},
		]);
		setInputValue('');
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<div className={classes.creator}>
			<input className={classes.input} type="text" value={inputValue} onChange={onChange} />
			<button className={classes.addButton} onClick={addItem}>
				Add
			</button>
		</div>
	);
};

export default TodoCreator;
