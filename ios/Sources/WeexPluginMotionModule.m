//
//  WeexPluginMotionModule.m
//  WeexPluginTemp
//
//  Created by  on 17/3/14.
//  Copyright © 2017年 . All rights reserved.
//

#import "WeexPluginMotionModule.h"
#import <WeexPluginLoader/WeexPluginLoader.h>

#import <CoreMotion/CoreMotion.h>

@interface WeexPluginMotionModule()

@property(nonatomic, strong) CMPedometer *pedometer;

@end

@implementation WeexPluginMotionModule

WX_PlUGIN_EXPORT_MODULE(motion, WeexPluginMotionModule)
WX_EXPORT_METHOD(@selector(getTodayStepCount:))
WX_EXPORT_METHOD(@selector(getStepCount:callback:))

- (instancetype)init {
    self = [super init];
    if (self) {
        self.pedometer = [[CMPedometer alloc] init];
    }
    return self;
}

// 获取今天步数
- (void)getTodayStepCount:(WXModuleCallback)callback {
    NSCalendar *calendar = [NSCalendar currentCalendar];
    NSDate *now = [NSDate date];
    NSDateComponents *components = [calendar components:NSCalendarUnitYear|NSCalendarUnitMonth|NSCalendarUnitDay
                                               fromDate:now];
    NSDate *startDate = [calendar dateFromComponents:components];
    NSDate *endDate = now;
    
    return [self getStepCount:@{@"start": startDate, @"end": endDate}
                     callback:callback];
}

/**
 获取步数数据
 
 @param params 请求参数，`start`: 开始时间；`end`: 结束时间
 @param callback 回调函数
 */
- (void)getStepCount:(NSDictionary *)params callback:(WXModuleCallback)callback {
    id start = params[@"start"];
    id end = params[@"end"];
    
    NSLog(@"%@ - %@", start, end);
    
    if (start == nil) {
        start = [NSDate dateWithTimeIntervalSinceNow:-(60 * 60 * 24 * 7)];
        
    }
    if (end == nil) {
        end = [NSDate date];
    }
    
    if (CMPedometer.isStepCountingAvailable) {
//        NSDateFormatter fmt = [[NSDateFormatter alloc] init]
        [self.pedometer queryPedometerDataFromDate:start toDate:end withHandler:^(CMPedometerData *pedometerData, NSError *error) {
            if (error) {
                callback(@{@"result": @NO,
                           @"message": [error localizedDescription]
                           });
            } else {
                callback(@{@"result": @YES,
                           @"numberOfSteps": pedometerData.numberOfSteps
                           });
            }
            
           callback(@{});
        }];
    } else {
        NSLog(@"此设备不支持计步功能！");
        
    }
}

@end
