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
  weex.registerModule('motion', weexPluginMotion, meta);
}

export default {
  init: init
};
