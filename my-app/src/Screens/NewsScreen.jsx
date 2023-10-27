import * as React from 'react';
import { useRef } from 'react';
import { WebView } from 'react-native-webview';


const NewsScreen = () => {

    const webViewRef = useRef(null);

    return (
      
        <WebView
        ref={webViewRef}
                source={require('../Map/New.html')}
                style={{ flex: 1 }}              
            />

            


    );
}
export default NewsScreen;


