import Vue from 'vue';

import weex from 'weex-vue-render';

import WeexPluginMotion from '../src/index';

weex.init(Vue);

weex.install(WeexPluginMotion)

const App = require('./index.vue');
App.el = '#root';
new Vue(App);
