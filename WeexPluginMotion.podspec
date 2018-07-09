# coding: utf-8

Pod::Spec.new do |s|
  s.name         = "WeexPluginMotion"
  s.version      = "0.1.0"
  s.summary      = "一个运动相关weex扩展"

  s.description  = <<-DESC
                   Weexplugin Source Description
                   DESC

  s.homepage     = "https://github.com"
  s.license = {
    :type => 'Copyright',
    :text => <<-LICENSE
            copyright
    LICENSE
  }
  s.authors      = {
                     "luwei" =>"lw1023@gmail.com"
                   }
  s.platform     = :ios
  s.ios.deployment_target = "8.0"

  s.source       = { :git => 'please input the url of your code in github', :tag => 'please input you github tag' }
  s.source_files  = "ios/Sources/*.{h,m,mm}"
  
  s.requires_arc = true
  s.dependency "WeexPluginLoader"
  s.dependency "WeexSDK"
end
