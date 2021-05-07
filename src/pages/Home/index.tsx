import React, { FC } from 'react';
import TodoList from '../../components/Todos/TodoList';
import TopBar from '../../components/TopBar';
import TodoCreator from '../../components/Todos/TodoCreator';
import classes from './index.module.css';

const Home: FC = () => {
	return (
		<div className={classes.home}>
			<TopBar />
			<TodoCreator />
			<TodoList />
		</div>
	);
};

export default Home;
