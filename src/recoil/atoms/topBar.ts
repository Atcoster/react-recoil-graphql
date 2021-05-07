import { atom } from 'recoil';

// This is a ATOM (An atom represents a piece of state)
// Atoms can be read from and written to from any component.
// Components that read the value of an atom are implicitly subscribed to that atom
export const topBarState = atom({
	key: 'topBarState', // unique ID (with respect to other atoms/selectors)
	default: 'This is a Recoil/GraphQL App', // default value (aka initial value)
});
