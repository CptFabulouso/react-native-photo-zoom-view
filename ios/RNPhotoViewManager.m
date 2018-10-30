#import "RNPhotoViewManager.h"
#import "RNPhotoView.h"
#import <React/RCTUIManager.h>
#import <UIKit/UIKit.h>

@implementation RNPhotoViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
    return [[RNPhotoView alloc] initWithBridge:self.bridge];
}

RCT_REMAP_VIEW_PROPERTY(src, source, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(loadingIndicatorSrc, NSString)

RCT_REMAP_VIEW_PROPERTY(maximumZoomScale, maxZoomScale, CGFloat)
RCT_REMAP_VIEW_PROPERTY(minimumZoomScale, minZoomScale, CGFloat)

RCT_EXPORT_VIEW_PROPERTY(showsHorizontalScrollIndicator, BOOL)
RCT_EXPORT_VIEW_PROPERTY(showsVerticalScrollIndicator, BOOL)

RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerError, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerScale, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerViewTap, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerTap, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerLoadStart, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerLoad, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerLoadEnd, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onPhotoViewerProgress, RCTDirectEventBlock);

RCT_EXPORT_METHOD(resetScale:(nonnull NSNumber *)reactTag)
{
    [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *, RNPhotoView *> *viewRegistry) {
        RNPhotoView *view = viewRegistry[reactTag];
        if ([view isKindOfClass:[RNPhotoView class]]) {
            [view resetScale];
        }
    }];
}

@end
