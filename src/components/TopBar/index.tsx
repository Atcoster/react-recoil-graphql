import { FC } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { topBarState } from '../../recoil/atoms/topBar';
import { topBarSelector } from '../../recoil/selectors/topBar';
import classes from './index.module.css';

const TopBar: FC = () => {
	const title = useRecoilValue(topBarState);
	const setCapitalizeTitle = useSetRecoilState(topBarSelector);

	return (
		<div className={classes.topBar}>
			<span className={classes.title}>{title}</span>
			<button className={classes.button} onClick={() => setCapitalizeTitle('New topbar title')}>
				Capitalize Title
			</button>
		</div>
	);
};

export default TopBar;
