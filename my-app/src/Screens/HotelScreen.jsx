import * as React from 'react';
import { useRef } from 'react';
import { WebView } from 'react-native-webview';

const HotelScreen = () => {

  const webViewRef = useRef(null);


    return (

      <WebView
      ref={webViewRef}
              source={require('../Map/Hotel.html')}
              style={{ flex: 1 }}
          
          
          />
        
        
    );
}
export default HotelScreen;