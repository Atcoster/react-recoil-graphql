import { FC, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { topBarState } from '../../recoil/atoms/topBar';
import { topBarSelector } from '../../recoil/selectors/topBar';
import classes from './index.module.css';

const TopBar: FC = () => {
	const [isTitleCapitalized, setIsTitleCapitalized] = useState(false);
	const title = useRecoilValue(topBarState);
	const setCapitalizeTitle = useSetRecoilState(topBarSelector);
	const resetTitle = useResetRecoilState(topBarState);

	const handleTitle = () => {
		setIsTitleCapitalized((current) => {
			return !current;
		});

		if (isTitleCapitalized) {
			resetTitle();
		} else {
			setCapitalizeTitle('This is a new Capitalized title');
		}
	};

	return (
		<div className={classes.topBar}>
			<span className={classes.title}>{title}</span>
			<button className={classes.button} onClick={handleTitle}>
				{isTitleCapitalized ? 'Reset Title' : 'Capitalize title'}
			</button>
		</div>
	);
};

export default TopBar;
