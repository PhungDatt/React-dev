import * as React from 'react';
import { useRef } from 'react';
import { WebView } from 'react-native-webview';

const FoodScreen = () => {

  const webViewRef = useRef(null);



    return (

      <WebView
      ref={webViewRef}
              source={require('../Map/Food.html')}
              style={{ flex: 1 }}
          
          
          />


    );
}
export default FoodScreen;