package com.reactnative.photoview;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.UIBlock;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.UIManagerModule;
import com.reactnative.photoview.PhotoView;



import java.util.Map;
import java.util.HashMap;

public class PhotoViewModule extends ReactContextBaseJavaModule {

    public PhotoViewModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    public String getName() {
        return "PhotoViewModule";
    }

    @ReactMethod
    public void resetScale(final int viewTag) {
        final ReactApplicationContext context = getReactApplicationContext();
        UIManagerModule uiManager = context.getNativeModule(UIManagerModule.class);
        uiManager.addUIBlock(new UIBlock() {
            @Override
            public void execute(NativeViewHierarchyManager nativeViewHierarchyManager) {
                final PhotoView photoView;

                try {
                    photoView = (PhotoView) nativeViewHierarchyManager.resolveView(viewTag);
                    photoView.setScale(1, true);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
