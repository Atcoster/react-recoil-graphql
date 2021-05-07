import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import ReCoilizeDebugger from 'recoilize';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
// import { DebugObserver, DebugButton, TimeTravelObserver } from './recoil/recoilDebugger';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			{/* <DebugObserver /> */}
			{/* <DebugButton /> */}
			{/* <TimeTravelObserver /> */}
			<ReCoilizeDebugger />
			<Home />
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
