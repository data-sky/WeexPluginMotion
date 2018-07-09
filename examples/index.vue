<template>
	<div class="wrapper">
    <image :src="logo" class="logo" />
    <text class="greeting">The plugin develop environment is ready!</text>
    <text class="message">Let's develop a weex plugin!</text>
		<div @click="createAction" class="button">
			<text style="color:#fff">Click Me!</text>
		</div>
  </div>
</template>

<style>
	.wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 20px;
		line-height: 80px;
    font-size: 36px;
    color: #41B883;
  }
  .message {
    margin: 30px;
		margin-top:70px;	
    font-size: 26px;
    color: #727272;
  }
	.button {
		margin: 20px;
		padding:20px;
		background-color:#1ba1e2;
		color:#fff;
	}
</style>

<script>

	const weexPluginMotion = weex.requireModule('weexPluginMotion');
	module.exports = {
		data: {
			logo: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
		},
		methods: {
			createAction: function() {
				weexPluginMotion.show();
			}
		}
	}
</script>

