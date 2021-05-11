import { FC, Fragment, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { allFakeTodosSelector } from '../../../recoil/atoms/todos';
import { FakeTodoItemType } from '../../../types/interfaces';
import classes from './index.module.css';

const DetailsWithSuspense = (): JSX.Element => {
	const fakeTodos = useRecoilValue<FakeTodoItemType[]>(allFakeTodosSelector);
	return (
		<Fragment>
			{fakeTodos.map((item: FakeTodoItemType, i: number) => (
				<li key={`fake_${i}`}>{item.title}</li>
			))}
		</Fragment>
	);
};

const FakeTodos: FC = () => {
	return (
		<div className={classes.fakeTodos}>
			<Suspense fallback={<div>Loading...</div>}>
				<DetailsWithSuspense />
			</Suspense>
		</div>
	);
};

export default FakeTodos;
