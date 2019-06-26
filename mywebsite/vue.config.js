module.exports = {
	publicPath: "./", // 默认'/'，部署应用包时的基本 URL
	outputDir: "dist",
	assetsDir: undefined,
	runtimeCompiler: true,
	productionSourceMap: false,
	filenameHashing: true,
	parallel: undefined,
	css: undefined,
	lintOnSave: undefined,
	configureWebpack: config => {
	},
	chainWebpack: config => {
		// 修复Lazy loading routes Error： Cyclic dependency  [https://github.com/vuejs/vue-cli/issues/1669]
		config.plugin("html").tap(args => {
			args[0].chunksSortMode = "dependency";
			return args;
		});
	},
	devServer: {
		overlay: {
			warnings: false,
			errors: false
		},
		open: true,
		host: "0.0.0.0",
		port: 8008,
		https: false,
		hotOnly: false,
		proxy: {
			"/api/": {
				target: "http://oop-a.eg99.org:8090/",
				changeOrigin: true
			},
			"/lottery_tra_api/": {
				target: "http://oop-a.eg99.org:8090/",
				changeOrigin: true
			},
			"/lottery_api/": {
				target: "http://oop-a.eg99.org:8090/",
				changeOrigin: true
			},
			"/member_api/": {
				target: "http://oop-a.eg99.org:8090/",
				changeOrigin: true
			},
			"/ws/": {
				// 本地跑专用
				target: "ws://eg99.org:8010",
				changeOrigin: true,
				ws: true,
				secure: false
			}
		}
	}
};
