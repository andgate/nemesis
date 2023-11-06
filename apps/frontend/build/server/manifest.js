const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d2b40979.js","app":"_app/immutable/entry/app.a6860ad9.js","imports":["_app/immutable/entry/start.d2b40979.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.035c5bc4.js","_app/immutable/entry/app.a6860ad9.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.3e1d3b23.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-93ea03dc.js')),
			__memo(() => import('./chunks/1-01725943.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
