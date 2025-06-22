---
layout: page
title: User Classification for Smart Glasses: From Authentication to Identification
description: Detecting user presence and identity using motion sensor data from smart glasses
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
giscus_comments: true
---

### 🧠 Context  
As wearable devices like smart glasses become more prevalent, ensuring that the data they collect is valid — and identifying the actual user — becomes critical. Most systems don't distinguish between idle data (e.g., glasses left on a desk) and meaningful usage. This project addresses that gap.

---

### 🎯 Task  
Design a complete, real-time machine learning pipeline to:
- Detect whether smart glasses are currently being worn  
- Authenticate the rightful user  
- Identify the individual among a group of users  
All using only IMU sensor data, running on-device, without deep learning.

---

### ⚙️ Approach  
We built and evaluated a full ML pipeline using smart glasses' motion sensor data.  
Key components:

- **Data**: Collected from 17 participants performing 6 predefined head gestures on Epson Moverio BT-350  
- **Sensors**: Accelerometer, Gyroscope, Rotation Vector, Geomagnetic  
- **Features**: Simple time-domain stats (mean, min, max) over 1s windows  
- **Classifiers tested**:  
  - Adaboost  
  - Random Forest  
  - SVM (RBF/poly)  
  - MLP  
  - Ensembles (e.g., SVM+MLP)  
- **Preprocessing**: Sliding window (50% overlap), SMOTE for class imbalance  
- **Evaluation**: Gesture-specific 10-fold cross-validation  

---

### 📊 Key Results  

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/far_frr_eer.png" title="Authentication Performance (EER/FAR/FRR)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- The triangle gesture with RotVec + GeoMag sensors achieved an **Equal Error Rate of 1.3%**  
- Adaboost consistently outperformed other models in both authentication and identification tasks

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/eer_results.png" title="Sensor Combination Effect on EER" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- High accuracy was achieved with only **2 sensors**, enabling low-power, on-device deployment  
- Sliding window and SMOTE together significantly improved robustness across users

---

### 🧾 Outcome & Impact  
- 🔒 Enabled secure, personalized interactions with smart glasses without user input  
- ⚙️ Designed for embedded deployment using classical ML — no deep learning or cloud needed  
- 📈 Validated on real data from 17 users with strong performance  
- 📄 Published in SN Computer Science (Springer, 2023)

This project shows how practical ML pipelines — when thoughtfully designed — can solve real-world problems even under compute and power constraints. It demonstrates attention to deployment constraints, responsible data collection, and model evaluation.

---

### 🔗 Resources  
- 📁 [GitHub Repository](https://github.com/sumeyye-agac/glass-data-participant-detection)  
- 📄 [Published Paper (SN Computer Science)](https://doi.org/10.1007/s42979-023-02202-4)

---

**Tags:**  
`#UserAuthentication` `#Identification` `#EdgeAI` `#WearableComputing` `#SensorFusion` `#MachineLearning` `#TimeSeriesClassification`
