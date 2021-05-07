import React, { FC } from 'react';
import TodoList from '../../components/Todos/TodoList';
import TodoCreator from '../../components/Todos/TodoCreator';
import TodoListFilters from '../../components/Todos/TodoListFilters';
import classes from './index.module.css';

const Home: FC = () => {
	return (
		<div className={classes.home}>
			<TodoCreator />
			<TodoListFilters />
			<TodoList />
		</div>
	);
};

export default Home;
