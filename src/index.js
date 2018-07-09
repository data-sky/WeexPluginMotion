/* globals alert */
const weexPluginMotion = {
  show () {
    alert('Module weexPluginMotion is created sucessfully ');
  }
};

const meta = {
  weexPluginMotion: [{
    lowerCamelCaseName: 'show',
    args: []
  }]
};

function init (weex) {
  weex.registerModule('weexPluginMotion', weexPluginMotion, meta);
}

export default {
  init: init
};
