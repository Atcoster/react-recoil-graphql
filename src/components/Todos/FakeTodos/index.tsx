import { FC, Fragment, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { allFakeTodosState } from '../../../recoil/atoms/todos';
import { FakeTodoItemType } from '../../../types/interfaces';
import classes from './index.module.css';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

const DetailsWithSuspense = (): JSX.Element => {
	const fakeTodos = useRecoilValue<FakeTodoItemType[]>(allFakeTodosState);
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
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Suspense fallback={<div>Loading...</div>}>
					<DetailsWithSuspense />
				</Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default FakeTodos;
