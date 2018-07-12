# WeexPluginMotion

[![Build Status](https://travis-ci.org/data-sky/WeexPluginMotion.svg?branch=master)](https://travis-ci.org/data-sky/WeexPluginMotion)
[![Version](https://img.shields.io/cocoapods/v/WeexPluginMotion.svg?style=flat)](http://cocoapods.org/pods/WeexPluginMotion)
[![License](https://img.shields.io/cocoapods/l/WeexPluginMotion.svg?style=flat)](http://cocoapods.org/pods/WeexPluginMotion)
[![Platform](https://img.shields.io/cocoapods/p/WeexPluginMotion.svg?style=flat)](http://cocoapods.org/pods/WeexPluginMotion)

一个获取运动相关数据的 `weex` 扩展。

*注意：由于Apple隐私策略限制，在使用本扩展时，必须在工程 `Info.plist` 文件中添加如下配置。*
```xml
<!-- 运动与健身 --> 
<key>NSMotionUsageDescription</key>
<string>App需要您的同意,才能访问运动与健身</string> 
```
*另，由于 `CoreMotion` 只支持获取最近7天的运动数据，所以这个扩展获取的数据也最多只有最近7天。*

## 安装

1. 在 iOS 项目文件夹的 Podfile 中添加以下代码
```ruby
pod 'WeexPluginMotion'
```

2. 到此目录下执行如下命令
```
pod update
```

## 使用方法

在 `.vue` 文件中使用如下方式引入插件:

```javascript
const motion = weex.requireModule('motion')
```

## API

### 获取当天步数。

示例

```javascript
motion.getTodayStepCount(params => {
  if (params.success) {
    console.log('当前今天步数：', params.numberOfSteps)
  } else {
    console.log('获取今天步数失败：', params.message)
  }
})
```

回调函数参数：
* `success (Boolean)`: 是否成功返回数据。
* `message (String)`: 获取数据失败的原因描述。
* `numberOfSteps (Number)`: 用户的步数。

### 获取某个时间段内的步数。

示例

```javascript
motion.getStepCount({
  startDate: startDate,
  endDate: endDate
}, params => {
  if (params.success) {
    console.log('当前步数：', params.numberOfSteps)
  } else {
    console.log('获取步数失败：', params.message)
  }
})
```

请求参数：
* `startDate (Date)`: 开始时间。不传表示很久以前
* `endDate (Date)`: 结束时间。不传表示当前时间；

回调函数参数：
* `success (Boolean)`: 是否成功返回数据。
* `message (String)`: 获取数据失败的原因描述。
* `numberOfSteps (Number)`: 用户的步数。

### 获取某个时间段内的运动相关数据。

示例

```javascript
motion.getPedometerData({
  startDate: startDate,
  endDate: endDate
}, params => {
  if (params.success) {
    console.log('当前运动数据：', params.numberOfSteps)
  } else {
    console.log('获取运动数据失败：', params.message)
  }
})
```

请求参数：
* `startDate (Date)`: 开始时间。不传表示很久以前
* `endDate (Date)`: 结束时间。不传表示当前时间；

回调函数参数：
* `success (Boolean)`: 是否成功返回数据。
* `message (String)`: 获取数据失败的原因描述。
* `startDate (Date)`: 计步器数据有效期间的开始时间。
* `endDate (Date)`: 计步器数据有效期间的结束时间。
* `numberOfSteps (Number)`: 用户的步数。
* `floorsAscended (Number)`: 上楼的大概楼层数，若设备不支持则值为 `undefined`。
* `numberOfSteps (Number)`: 下楼的大概楼层数, 若设备不支持则值为 `undefined`。

## License
WeexPluginMotion is released under the MIT license. [See LICENSE](https://github.com/data-sky/WeexPluginMotion/blob/master/LICENSE) for details.

