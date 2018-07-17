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
WX_EXPORT_METHOD(@selector(getPedometerData:callback:))
WX_EXPORT_METHOD(@selector(startPedometerUpdates:callback:))
WX_EXPORT_METHOD(@selector(stopPedometerUpdates))

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
    
    return [self getStepCount:@{@"startDate": startDate, @"endDate": endDate}
                     callback:callback];
}

/**
 获取步数数据
 
 @param params 请求参数，`startDate`: 开始时间，不传表示很久以前；`endDate`: 结束时间，不传表示当前时间；
 @param callback 回调函数
 */
- (void)getStepCount:(NSDictionary *)params callback:(WXModuleCallback)callback {
    [self queryPedometerData:params callback:callback handler:^NSDictionary *(CMPedometerData *pedometerData) {
        return @{@"numberOfSteps": pedometerData.numberOfSteps};
    }];
}

static NSMutableDictionary * convertPedometerData(CMPedometerData *pedometerData) {
    NSMutableDictionary *data = [@{@"startDate": pedometerData.startDate,
                                   @"endDate": pedometerData.endDate,
                                   @"numberOfSteps": pedometerData.numberOfSteps,
                                   } mutableCopy];
    if (pedometerData.distance) {
        data[@"distance"] = pedometerData.distance;
    } else {
        NSLog(@"设备不支持统计用户行走和跑步时估计的距离！");
    }
    if (pedometerData.floorsAscended) {
        data[@"floorsAscended"] = pedometerData.floorsAscended;
    } else {
        NSLog(@"设备不支持统计上楼的大概楼层数！");
    }
    if (pedometerData.floorsDescended) {
        data[@"floorsDescended"] = pedometerData.floorsDescended;
    } else {
        NSLog(@"设备不支持统计下楼的大概楼层数！");
    }
    
    if ([pedometerData respondsToSelector:@selector(currentPace)]) {
        if (pedometerData.currentPace) {
            data[@"currentPace"] = pedometerData.currentPace;
        } else {
            NSLog(@"设备不支持统计速度(s/m)！");
        }
    }
    
    if ([pedometerData respondsToSelector:@selector(currentCadence)]) {
        if (pedometerData.currentPace) {
            data[@"currentCadence"] = pedometerData.currentCadence;
        } else {
            NSLog(@"设备不支持统计以秒为单位执行行走的节奏！");
        }
    }
    
    if ([pedometerData respondsToSelector:@selector(averageActivePace)]) {
        if (pedometerData.averageActivePace) {
            data[@"averageActivePace"] = pedometerData.averageActivePace;
        } else {
            NSLog(@"设备不支持统计平均活动速度！");
        }
    }
    
    return data;
}

/**
 查询运动数据
 
 @param params 请求参数，`startDate`: 开始时间，不传表示很久以前；`endDate`: 结束时间，不传表示当前时间；
 @param callback 回调函数
 */
- (void)getPedometerData:(NSDictionary *)params callback:(WXModuleCallback)callback {
    [self queryPedometerData:params callback:callback handler:^NSDictionary *(CMPedometerData *pedometerData) {
        return convertPedometerData(pedometerData);
    }];
}

- (void)queryPedometerData:(NSDictionary *)params callback:(WXModuleCallback)callback handler:(NSDictionary* (^)(CMPedometerData *))handler {
    NSDate *start = params[@"startDate"];
    NSDate *end = params[@"endDate"];
    
    NSLog(@"%@ - %@", start, end);
    
    if (start == nil) {
        start = [NSDate dateWithTimeIntervalSinceNow:-(60 * 60 * 24 * 10)];
        
    }
    if (end == nil) {
        end = [NSDate date];
    }
    
    if (CMPedometer.isStepCountingAvailable) {
        [self.pedometer queryPedometerDataFromDate:start toDate:end withHandler:^(CMPedometerData *pedometerData, NSError *error) {
            if (error) {
                callback(@{@"success": @NO,
                           @"message": [error localizedDescription]
                           });
            } else {
                NSMutableDictionary *result = [@{@"success": @YES} mutableCopy];
                [result addEntriesFromDictionary:handler(pedometerData)];
                
                callback(result);
            }
        }];
    } else {
        NSLog(@"此设备不支持计步功能！");
    }
}


- (void)startPedometerUpdates:(NSDictionary *)params callback:(WXModuleKeepAliveCallback)callback {
    NSDate *start = params[@"date"];
    if (start == nil) {
        start = [NSDate date];
    }
    
    NSLog(@"开始记录：%@", start);
    
    if (CMPedometer.isStepCountingAvailable) {
        [self.pedometer startPedometerUpdatesFromDate:[NSDate date] withHandler:^(CMPedometerData * _Nullable pedometerData, NSError * _Nullable error) {
            NSLog(@"numberOfSteps: %@", pedometerData.numberOfSteps);
            
            if (error) {
                callback(@{@"success": @NO,
                           @"message": [error localizedDescription]
                           }, NO);
            } else {
                NSMutableDictionary *result = [@{@"success": @YES} mutableCopy];
                [result addEntriesFromDictionary:convertPedometerData(pedometerData)];

                callback(result, NO);
            }
        }];
    } else {
        NSLog(@"此设备不支持计步功能！");
    }
}

- (void)stopPedometerUpdates {
    [self.pedometer stopPedometerUpdates];
}

- (NSThread *)targetExecuteThread {
    return [WXComponentManager componentThread];
}

@end
