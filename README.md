# WeexPluginMotion

一个运动相关 weex 扩展

## 集成

- 在 iOS 项目文件夹的 Podfile 中添加以下代码，然后执行 pod update4

```ruby
pod 'WeexPluginMotion' #, :git => 'https://github.com/data-sky/WeexPluginMotion.git', :tag => '0.1.3'
```

## 使用方法

```javascript
const motion = weex.requireModule('motion')
motion.getStepCount()
```
