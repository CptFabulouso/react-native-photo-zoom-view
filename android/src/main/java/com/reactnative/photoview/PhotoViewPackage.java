package com.reactnative.photoview;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import com.reactnative.photoview.viewpager.ReactViewPagerManager;
import com.reactnative.photoview.PhotoViewModule;

/**
 * @author alwx (https://github.com/alwx)
 * @version 1.0
 */
public class PhotoViewPackage implements ReactPackage {
    // Deprecated from RN 0.47
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new PhotoViewManager(reactContext));
        viewManagers.add(new ReactViewPagerManager());
        return viewManagers;
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new PhotoViewModule(reactContext)
        );
    }
}
