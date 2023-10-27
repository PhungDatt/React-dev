import React, { useEffect } from 'react';
import { Text } from 'react-native-paper';
import Tts from 'react-native-tts';

const TextToSpeech = ({ text }) => {
  useEffect(() => {
    Tts.speak(text);
    return () => {
      Tts.stop();
    };
  }, [text]);

  return <Text>{text}</Text>;
};

export default TextToSpeech;
