# 🎵 Mood-Sync: AI-Powered Music Recommendation

**Mood-Sync** is a full-stack web application that uses **Computer Vision** to detect a user's emotional state and suggest music that matches their mood. By leveraging real-time facial landmark detection, the app bridges the gap between human emotion and digital audio libraries.



## 🚀 Features
* **On-Demand Emotion Detection:** Captures and analyzes facial expressions (Happy, Sad, Surprise, Neutral) at the click of a button.
* **AI-Driven Analysis:** Uses Google's **MediaPipe** to process 52 facial blendshapes for high-accuracy mood mapping.
* **Music Personalization:** Automatically suggests playlists or tracks based on the detected emotional state.
* **Full-Stack Architecture:** Integrated React frontend with a Node.js/Express backend.

## 🛠️ Tech Stack
* **Frontend:** React.js
* **AI/ML:** Google MediaPipe (Face Landmarker)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **API Integration:** Integration with music retrieval services.

## ⚙️ Technical Implementation
### The Emotion Logic
Instead of a simple "one-size-fits-all" model, this project maps specific **MediaPipe Blendshapes** to emotional categories:
* **Happy:** High scores in `mouthSmileLeft` and `mouthSmileRight`.
* **Surprise:** Elevated `eyeWideLeft`, `eyeWideRight`, and `browInnerUp`.
* **Sad:** Detection of `frownLeft`, `frownRight`, and `mouthFrown`.



## 📥 Installation & Setup
1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/Ramiz1323/Mood-Sync.git](https://github.com/Ramiz1323/Mood-Sync.git)
    ```
2.  **Install Dependencies:**
    ```bash
    npm install
    ```
3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

---

## 👨‍💻 About the Developer
I am **Sk Ramiz Raza**, an experienced mathematics teacher and a Full Stack Web Development student at Shreyians. This project (**Project-2**) showcases my interest in combining computer vision with modern web technologies.

---
