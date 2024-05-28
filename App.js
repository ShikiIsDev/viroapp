import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';
import ARScene from './ARScene';

const App = () => {
  return <ViroARSceneNavigator initialScene={{ scene: ARScene }} />;
};

