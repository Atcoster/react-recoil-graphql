import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import ReCoilizeDebugger from 'recoilize';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { DebugObserver, DebugButton, TimeTravelObserver } from './recoil/recoilDebugger';
import './index.css';
import TopBar from './components/TopBar';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<ReCoilizeDebugger />
			<DebugObserver />
			{/* <DebugButton /> */}
			{/* <TimeTravelObserver /> */}
			<Suspense fallback={<div>Loading... </div>}>
				<TopBar />
				<Home />
			</Suspense>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
