import { FC } from 'react';
import TodoList from './TodoList';
import TodoCreator from './TodoCreator';
import TodoListFilters from './TodoListFilters';
import FakeTodos from './FakeTodos';
import classes from './index.module.css';

const Todos: FC = () => {
	return (
		<div className={classes.todos}>
			<TodoCreator />
			<TodoListFilters />
			<TodoList />
			<h2>Fake fetched todos</h2>
			<FakeTodos />
		</div>
	);
};

export default Todos;
