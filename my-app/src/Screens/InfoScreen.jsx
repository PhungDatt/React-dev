import * as React from 'react';
import { useRef } from 'react';
import { WebView } from 'react-native-webview';


const InfoScreen = () => {

    const webViewRef = useRef(null);

    return (
      
        <WebView
        ref={webViewRef}
                source={require('../Map/Info.html')}
                style={{ flex: 1 }}              
            />

            


    );
}
export default InfoScreen;


