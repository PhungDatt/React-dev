import React from 'react';
import { useRef } from 'react';
import { WebView } from 'react-native-webview';

const MapScreen = () => {
  
    const webViewRef = useRef(null);
  
  
  
    return (
            <WebView
            ref={webViewRef}
                    source={require('../Map/Map.html')}
                    style={{ flex: 1 }}
                
                
                />
  
    );
  }

export default MapScreen ;