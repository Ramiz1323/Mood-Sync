import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

// 1. Initialize the Landmarker
export const initFaceLandmarker = async () => {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );

  return await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
      delegate: "GPU"
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO"
  });
};

// 2. The Emotion Mapping Logic (Thresholds)
export const mapExpressions = (blendshapes) => {
  if (!blendshapes || blendshapes.length === 0) return "No Face Detected";

  const s = {};
  blendshapes[0].categories.forEach(item => s[item.categoryName] = item.score);

  // Adjusted thresholds for Sad and Surprise
  if (s['eyeWideLeft'] > 0.2 || s['eyeWideRight'] > 0.2 || s['browInnerUp'] > 0.3) {
    return "Surprise 😲";
  } 
  if (s['mouthSmileLeft'] > 0.4 || s['mouthSmileRight'] > 0.4) {
    return "Happy 😊";
  } 
  if (s['frownLeft'] > 0.12 || s['frownRight'] > 0.12 || s['mouthFrownLeft'] > 0.12) {
    return "Sad 😢";
  }

  return "Neutral 😐";
};