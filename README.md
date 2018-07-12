# WeexPluginMotion
[![Build Status](https://travis-ci.org/data-sky/WeexPluginMotion.svg?branch=master)](https://travis-ci.org/data-sky/WeexPluginMotion)
[![Version](https://img.shields.io/cocoapods/v/WeexPluginMotion.svg?style=flat)](http://cocoapods.org/pods/WeexPluginMotion)
[![License](https://img.shields.io/cocoapods/l/WeexPluginMotion.svg?style=flat)](http://cocoapods.org/pods/WeexPluginMotion)
[![Platform](https://img.shields.io/cocoapods/p/WeexPluginMotion.svg?style=flat)](http://cocoapods.org/pods/WeexPluginMotion)

一个运动相关 weex 扩展

## 集成

- 在 iOS 项目文件夹的 Podfile 中添加以下代码，然后执行 pod update

```ruby
pod 'WeexPluginMotion'
```

## 使用方法

```javascript
const motion = weex.requireModule('motion')
motion.getStepCount()
```


