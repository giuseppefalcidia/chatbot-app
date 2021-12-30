import React from 'react';
import { View, Text, SafeAreaView } from "react-native";
import ChatBot from './src/chatBot';

const App = () => {
  return (
    <SafeAreaView>
      <ChatBot />
    </SafeAreaView>
  );
};

export default App;