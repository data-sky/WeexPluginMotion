<template>
	<div class="wrapper">
		<image :src="logo"
		       class="logo" />
		<text class="greeting">The plugin develop environment is ready!</text>
		<text class="message">Let's develop a weex plugin!</text>
		<div @click="createAction"
		     class="button">
			<text style="color:#fff">Click Me!</text>
		</div>

		<div>
			<text>startDate: {{ pedometerData.startDate }}</text>
			<text>endDate: {{ pedometerData.endDate }}</text>
			<text>numberOfSteps: {{ pedometerData.numberOfSteps }}</text>
			<text>distance: {{ pedometerData.distance }}m</text>
			<text>floorsAscended: {{ pedometerData.floorsAscended }}</text>
			<text>floorsDescended: {{ pedometerData.floorsDescended }}</text>
			<text>currentPace: {{ pedometerData.currentPace }}s/m</text>
			<text>currentCadence: {{ pedometerData.currentCadence }}</text>
			<text>averageActivePace: {{ pedometerData.averageActivePace }}</text>
		</div>

		<div style="flex-direction: row;">
			<div class="button"
			     @click="getPedometerData">
				<text style="color:#fff">今天的运动数据</text>
			</div>
		</div>

		<div style="flex-direction: row;">
			<div class="button"
			     @click="startPedometerUpdates">
				<text style="color:#fff">开始记录</text>
			</div>
			<div class="button"
			     @click="stopPedometerUpdates">
				<text style="color:#fff">停止记录</text>
			</div>
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
  color: #41b883;
}
.message {
  margin: 30px;
  margin-top: 70px;
  font-size: 26px;
  color: #727272;
}
.button {
  margin: 20px;
  padding: 20px;
  background-color: #1ba1e2;
  color: #fff;
}
</style>

<script>

const motion = weex.requireModule('motion');
module.exports = {
	data: {
		logo: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
		pedometerData: {}
	},
	methods: {
		createAction: function () {
			const now = new Date()
			const year = now.getFullYear()
			const month = now.getMonth()
			const date = now.getDate()

			const startDate = new Date(year, month, date)
			const endDate = new Date()

			motion.getTodayStepCount(params => {
				if (params.success) {
					console.log('当前今天步数：', params.numberOfSteps);
				} else {
					console.log('获取今天步数失败：', params.message);
				}
			});

			motion.getStepCount({
				startDate: startDate,
				endDate: endDate
			}, params => {
				if (params.success) {
					console.log('当前步数：', params.numberOfSteps);
				} else {
					console.log('获取步数失败：', params.message);
				}
			});

			motion.getStepCount({}, params => {
				if (params.success) {
					console.log('所有步数：', params.numberOfSteps);
				} else {
					console.log('获取所有步数失败：', params.message);
				}
			});

			motion.getPedometerData({
				startDate: startDate,
				endDate: endDate
			}, params => {
				if (params.success) {
					console.log('当前运动数据：', JSON.stringify(params, null, 4));
				} else {
					console.log('获取运动数据失败：', params.message);
				}
			});
		},

		getPedometerData () {
			const now = new Date()
			const year = now.getFullYear()
			const month = now.getMonth()
			const date = now.getDate()

			const startDate = new Date(year, month, date)
			const endDate = new Date()

			motion.getPedometerData({
				startDate: startDate,
				endDate: endDate
			}, params => {
				if (params.success) {
					console.log('当前运动数据：', JSON.stringify(params, null, 4));
					this.pedometerData = params
				} else {
					console.log('获取运动数据失败：', params.message);
				}
			});
		},

		startPedometerUpdates () {
			motion.startPedometerUpdates({
				"date": new Date()
			}, params => {
				if (params.success) {
					console.log('当前运动数据：', JSON.stringify(params, null, 4));
					this.pedometerData = params
				} else {
					console.log('获取运动数据失败：', params.message);
				}
			});
		},

		stopPedometerUpdates () {
			motion.stopPedometerUpdates()
		}
	}
}
</script>

