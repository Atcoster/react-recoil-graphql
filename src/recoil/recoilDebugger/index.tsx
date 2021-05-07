import { useEffect, FC, useState } from 'react';
import { Snapshot, useGotoRecoilSnapshot, useRecoilCallback, useRecoilSnapshot } from 'recoil';

// Observing All State Changes
const DebugObserver: FC = (): JSX.Element | null => {
	const snapshot = useRecoilSnapshot();
	useEffect(() => {
		console.debug('The following atoms were modified:');
		for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
			console.debug(node.key, snapshot.getLoadable(node));
		}
	}, [snapshot]);

	return null;
};

// Observing State Changes On-Demand
const DebugButton: FC = (): JSX.Element => {
	const onClick = useRecoilCallback(
		({ snapshot }) => async () => {
			console.debug('Atom values:');
			for (const node of snapshot.getNodes_UNSTABLE()) {
				const value = await snapshot.getPromise(node);
				console.debug(node.key, value);
			}
		},
		[],
	);

	return <button onClick={onClick}>Dump State</button>;
};

const TimeTravelObserver: FC = (): JSX.Element => {
	const [snapshots, setSnapshots] = useState<Snapshot[]>([]);

	const snapshot = useRecoilSnapshot();
	useEffect(() => {
		if (snapshots.every((s: Snapshot) => s.getID() !== snapshot.getID())) {
			setSnapshots([...snapshots, snapshot]);
		}
	}, [snapshot, snapshots]);

	const gotoSnapshot = useGotoRecoilSnapshot();

	return (
		<ol>
			{snapshots.map((snapshot: Snapshot, i: number) => (
				<li key={i}>
					Snapshot {i}
					<button onClick={() => gotoSnapshot(snapshot)}>Restore</button>
				</li>
			))}
		</ol>
	);
};

export { DebugObserver, DebugButton, TimeTravelObserver };
