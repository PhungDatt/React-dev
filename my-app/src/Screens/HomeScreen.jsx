import {View} from 'react-native';
import { useRef } from 'react';
import { WebView } from 'react-native-webview';


const HomeScreen = () => {
    const webViewRef = useRef(null);

    return (
        <WebView
        ref={webViewRef}
                source={require('../Map/Home.html')}
                style={{ flex: 1 }}
            
            
            />


    );
}
export default HomeScreen;