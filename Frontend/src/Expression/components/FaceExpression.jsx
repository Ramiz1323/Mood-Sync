import React, { useRef, useState } from 'react';
import { initFaceLandmarker, mapExpressions } from '../utils/utils';

const FaceExpression = () => {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const [emotion, setEmotion] = useState("Ready to check?");
  const [isCameraActive, setIsCameraActive] = useState(false);
  
  const handleCheckExpression = async () => {
    setEmotion("Analyzing face...");

    try {
      // 1. Initialize AI if it's the first time
      if (!landmarkerRef.current) {
        landmarkerRef.current = await initFaceLandmarker();
      }

      // 2. Start Camera if it's not already active
      if (!isCameraActive) {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setIsCameraActive(true);
      }

      // 3. Perform a SINGLE detection (No Loop)
      if (landmarkerRef.current && videoRef.current) {
        // Wait a tiny bit for the video frame to stabilize if just started
        const results = landmarkerRef.current.detectForVideo(videoRef.current, performance.now());

        if (results.faceBlendshapes && results.faceBlendshapes.length > 0) {
          const result = mapExpressions(results.faceBlendshapes);
          setEmotion(result); // Show the expression ONLY now
        } else {
          setEmotion("Could not see your face clearly 🔍");
        }
      }
    } catch (err) {
      setEmotion("Error: " + err.message);
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{emotion}</h1>
      
      <div style={{ margin: '20px auto', width: 'fit-content' }}>
        <video 
          ref={videoRef} 
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            borderRadius: '15px', 
            display: isCameraActive ? 'block' : 'none',
            transform: 'scaleX(-1)' // Mirror view
          }} 
          muted 
        />
      </div>

      <button 
        onClick={handleCheckExpression}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: '#E1306C',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {isCameraActive ? "Check My Expression" : "Start Camera & Check"}
      </button>
    </div>
  );
};

export default FaceExpression;