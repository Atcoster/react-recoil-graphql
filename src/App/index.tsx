import { FC, Suspense } from 'react';
import Todos from '../components/Todos';
import TopBar from '../components/TopBar';
import classes from './index.module.css';

const App: FC = () => {
	return (
		<div className={classes.app}>
			<Suspense fallback={<div>Loading... </div>}>
				<TopBar />
				<Todos />
			</Suspense>
		</div>
	);
};

export default App;
