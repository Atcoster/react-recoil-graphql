import { selector } from 'recoil';
import { topBarState } from '../atoms/topBar';

export const topBarSelector = selector<string>({
	key: 'topBarSelector',
	get: ({ get }) => {
		const topBarTitle = get(topBarState);
		return topBarTitle;
	},
	set: ({ set }, newTitle) => {
		const capitilized = newTitle.toString().toLocaleUpperCase();
		console.log(capitilized, newTitle);
		set(topBarState, capitilized);
	},
});
