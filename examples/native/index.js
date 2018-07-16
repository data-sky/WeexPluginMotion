// { "framework": "Vue" } 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/luwei/Workspace/git/weex-plugin-motion/examples/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-063c7bdb"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "20",
    "lineHeight": "80",
    "fontSize": "36",
    "color": "#41b883"
  },
  "message": {
    "marginTop": "70",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "26",
    "color": "#727272"
  },
  "button": {
    "marginTop": "20",
    "marginRight": "20",
    "marginBottom": "20",
    "marginLeft": "20",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20",
    "backgroundColor": "#1ba1e2",
    "color": "#ffffff"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var motion = weex.requireModule('motion');
module.exports = {
	data: {
		logo: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
		pedometerData: {}
	},
	methods: {
		createAction: function createAction() {
			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth();
			var date = now.getDate();

			var startDate = new Date(year, month, date);
			var endDate = new Date();

			motion.getTodayStepCount(function (params) {
				if (params.success) {
					console.log('当前今天步数：', params.numberOfSteps);
				} else {
					console.log('获取今天步数失败：', params.message);
				}
			});

			motion.getStepCount({
				startDate: startDate,
				endDate: endDate
			}, function (params) {
				if (params.success) {
					console.log('当前步数：', params.numberOfSteps);
				} else {
					console.log('获取步数失败：', params.message);
				}
			});

			motion.getStepCount({}, function (params) {
				if (params.success) {
					console.log('所有步数：', params.numberOfSteps);
				} else {
					console.log('获取所有步数失败：', params.message);
				}
			});

			motion.getPedometerData({
				startDate: startDate,
				endDate: endDate
			}, function (params) {
				if (params.success) {
					console.log('当前运动数据：', JSON.stringify(params, null, 4));
				} else {
					console.log('获取运动数据失败：', params.message);
				}
			});
		},

		getPedometerData: function getPedometerData() {
			var _this = this;

			var now = new Date();
			var year = now.getFullYear();
			var month = now.getMonth();
			var date = now.getDate();

			var startDate = new Date(year, month, date);
			var endDate = new Date();

			motion.getPedometerData({
				startDate: startDate,
				endDate: endDate
			}, function (params) {
				if (params.success) {
					console.log('当前运动数据：', JSON.stringify(params, null, 4));
					_this.pedometerData = params;
				} else {
					console.log('获取运动数据失败：', params.message);
				}
			});
		},
		startPedometerUpdates: function startPedometerUpdates() {
			var _this2 = this;

			motion.startPedometerUpdates({
				"date": new Date()
			}, function (params) {
				if (params.success) {
					console.log('当前运动数据：', JSON.stringify(params, null, 4));
					_this2.pedometerData = params;
				} else {
					console.log('获取运动数据失败：', params.message);
				}
			});
		},
		stopPedometerUpdates: function stopPedometerUpdates() {
			motion.stopPedometerUpdates();
		}
	}
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  }), _c('text', {
    staticClass: ["greeting"]
  }, [_vm._v("The plugin develop environment is ready!")]), _c('text', {
    staticClass: ["message"]
  }, [_vm._v("Let's develop a weex plugin!")]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.createAction
    }
  }, [_c('text', {
    staticStyle: {
      color: "#fff"
    }
  }, [_vm._v("Click Me!")])]), _c('div', [_c('text', [_vm._v("startDate: " + _vm._s(_vm.pedometerData.startDate))]), _c('text', [_vm._v("endDate: " + _vm._s(_vm.pedometerData.endDate))]), _c('text', [_vm._v("numberOfSteps: " + _vm._s(_vm.pedometerData.numberOfSteps))]), _c('text', [_vm._v("distance: " + _vm._s(_vm.pedometerData.distance) + "m")]), _c('text', [_vm._v("floorsAscended: " + _vm._s(_vm.pedometerData.floorsAscended))]), _c('text', [_vm._v("floorsDescended: " + _vm._s(_vm.pedometerData.floorsDescended))]), _c('text', [_vm._v("currentPace: " + _vm._s(_vm.pedometerData.currentPace) + "s/m")]), _c('text', [_vm._v("currentCadence: " + _vm._s(_vm.pedometerData.currentCadence))]), _c('text', [_vm._v("averageActivePace: " + _vm._s(_vm.pedometerData.averageActivePace))])]), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.getPedometerData
    }
  }, [_c('text', {
    staticStyle: {
      color: "#fff"
    }
  }, [_vm._v("今天的运动数据")])])]), _c('div', {
    staticStyle: {
      flexDirection: "row"
    }
  }, [_c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.startPedometerUpdates
    }
  }, [_c('text', {
    staticStyle: {
      color: "#fff"
    }
  }, [_vm._v("开始记录")])]), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.stopPedometerUpdates
    }
  }, [_c('text', {
    staticStyle: {
      color: "#fff"
    }
  }, [_vm._v("停止记录")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);