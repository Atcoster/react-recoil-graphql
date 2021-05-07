import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { topBarState } from '../../recoil/atoms/topBar';
import classes from './index.module.css';

const TopBar: FC = () => {
	const title = useRecoilValue(topBarState);

	return (
		<div className={classes.topBar}>
			<span className={classes.title}>{title}</span>
		</div>
	);
};

export default TopBar;
