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
		client: {"start":"_app/immutable/entry/start.57ea4162.js","app":"_app/immutable/entry/app.e248058b.js","imports":["_app/immutable/entry/start.57ea4162.js","_app/immutable/chunks/scheduler.79619fc2.js","_app/immutable/chunks/singletons.68c61983.js","_app/immutable/entry/app.e248058b.js","_app/immutable/chunks/scheduler.79619fc2.js","_app/immutable/chunks/index.afad67ca.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-80c9e144.js')),
			__memo(() => import('./chunks/1-833f890b.js'))
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
