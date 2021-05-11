# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Recoil developer tool setup

Install the folowing chrome extention https://chrome.google.com/webstore/detail/recoilize/jhfmmdhbinleghabnblahfjfalfgidik/related?hl=en

```
	1. yarn add OR npm install recoilize @types/recoilize
	2. import recoilize debugger
	3. implement <RecoilizeDebugger>
```

Snapshot.getDeps_UNSTABLE has been removed in recoil 0.2.0. This API changed to Snapshot.getInfo_UNSTABLE().deps. Recoilize needs to be updated here to be compatible with the latest recoil 0.2.0 release.

Temporary Fix here https://github.com/open-source-labs/Recoilize/issues/136#issuecomment-831991096
Go to node_modules find recoilize folder and in index.js change the following
// This fix will be updated soon in a newer Recoilize version so its temporary

```
nodes.forEach(node => {
	// const getDeps = [...snapshot.getDeps_UNSTABLE(node)];
	const getDeps = [...snapshot.getInfo_UNSTABLE(node).deps];
	nodeDeps[node.key] = getDeps.map(dep => dep.key);
});
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
