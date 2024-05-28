import React, { useState, useEffect } from 'react';
import { ViroARScene, ViroImageMarker, ViroARTrackingTargets, ViroVideo, ViroMaterials, ViroNode } from 'react-viro';

const ARScene = () => {
  const [videoPaused, setVideoPaused] = useState(true);

  useEffect(() => {
    // Define the AR target
    ViroARTrackingTargets.createTargets({
      imageTarget: {
        source: require('./media/MaidSquad.png'),
        orientation: 'Up',
        physicalWidth: 0.1, // Real world width in meters
      },
    });

    // Define the material to remove the green screen
    ViroMaterials.createMaterials({
      chromaKeyMaterial: {
        chromaKeyFilteringColor: "#00FF00", // Green screen color
      },
    });
  }, []);

  const handleAnchorFound = () => {
    setVideoPaused(false);
  };

  return (
    <ViroARScene>
      <ViroImageMarker target="imageTarget" onAnchorFound={handleAnchorFound}>
        <ViroNode>
          <ViroVideo
            source={require('./media/AsunaDance.mp4')}
            loop={true}
            paused={videoPaused}
            volume={1.0}
            position={[0, 0, 0]}
            rotation={[-90, 0, 0]}
            scale={[0.1, 0.1, 0.1]}
            materials={['chromaKeyMaterial']}
          />
        </ViroNode>
      </ViroImageMarker>
    </ViroARScene>
  );
};

export default ARScene;
