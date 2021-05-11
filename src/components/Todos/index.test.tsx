import { snapshot_UNSTABLE } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { todoListState } from './../../recoil/atoms/todos';
import { TodoItemType } from '../../types/interfaces';

test('Test initial todo state', async () => {
	const newTodo: TodoItemType = {
		id: uuidv4(),
		isComplete: false,
		text: 'New test item',
	};

	const initialSnapshot = snapshot_UNSTABLE();
	expect(initialSnapshot.getLoadable(todoListState).valueOrThrow()).toHaveLength(1);

	const testSnapshot = snapshot_UNSTABLE(({ set }) => set(todoListState, (current) => [...current, newTodo]));
	expect(testSnapshot.getLoadable(todoListState).valueOrThrow()).toHaveLength(2);
});
