---
layout: page
title: User Classification for Smart Glasses: From Authentication to Identification
description: IMU-based, on-device user detection system for wearable smart glasses
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

### 👓 User Classification for Smart Glasses: From Authentication to Identification  
**A real-time system for detecting user presence, authenticating, and identifying individuals via motion sensor data from smart glasses — optimized for wearable deployment.**

---

### 🎯 Project Overview  
This project addresses a practical challenge in wearable computing: determining whether a smart glass device is actively being worn. The system classifies time-series IMU data to enable presence-aware filtering and supports secure, personalized use through user authentication and identification.

---

### 💡 Motivation  
Smart glasses and similar wearables collect continuous motion data, but not all of it is valid or meaningful. Detecting user presence before running downstream models like HAR or authentication improves data quality, conserves power, and enhances security.

---

### ⚙️ System Design  

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/architecture.png" title="System Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

The system processes raw IMU signals, extracts time-domain features, and classifies windows as either user or no-user. When a user is present, additional authentication and identification stages can be triggered — all designed for real-time execution on wearable hardware.

---

### 🧪 Data Collection & Gesture Design  

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/head_movements.png" title="Gesture Set" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- 17 participants  
- 6 head gestures: circle, up-down, tilt, triangle, turn, square  
- Device: Epson Moverio BT-350 smart glasses  
- Sensors: Accelerometer, Gyroscope, Rotation Vector, Geomagnetic  
- Sampling: 110 Hz / 55 Hz  

Data was segmented into 1-second windows, with simple features (mean, min, max) computed per axis and sensor — enabling efficient modeling with limited compute.

---

### 📉 Signal Patterns Across Users  

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/3dplots.png" title="3D IMU Traces by User" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Variability in gesture patterns across users formed the basis for behavioral biometric classification — essential for reliable authentication and identification.

---

### 📊 Results  

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/classifiers.png" title="Classifier Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/far_frr_eer.png" title="EER / FAR / FRR per Gesture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- **Authentication**: Achieved 1.3% EER using triangle gesture and RotVec + GeoMag sensors  
- **Identification**: 99.3% F1-score with Random Forest using 3-sensor fusion  
- Adaboost outperformed other models in most gesture-sensor settings  
- Applied sliding window overlap and SMOTE to handle sequential structure and class imbalance  

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/participant_based2.png" title="Error Reduction with Optimizations" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/eer_results.png" title="Sensor Fusion Results" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### ✅ Highlights  
- End-to-end ML pipeline for user presence detection, authentication, and identification  
- Real-time classification using <strong>only 3 handcrafted features</strong> per signal (mean, min, max)  
- Demonstrated <strong>state-of-the-art results</strong>: 1.3% EER and 99.3% identification F1-score  
- Outperformed baselines using <strong>Adaboost and minimal sensor fusion</strong>  
- Optimized for <strong>resource-limited, real-time execution</strong> on wearable hardware  
- Published in a peer-reviewed journal: <em>SN Computer Science (Springer, 2023)</em>  

---

### 🔗 Resources  
- 📁 [GitHub Repository](https://github.com/sumeyye-agac/glass-data-participant-detection)  
- 📄 [Published Paper (SN Computer Science)](https://doi.org/10.1007/s42979-023-02202-4)

---

### 🧾 Technical Summary

- 📌 **Problem:** Detect whether smart glasses are being worn and by whom — to reduce noise and support downstream HAR/authentication tasks  
- 📦 **Dataset:** 17 participants, 6 gestures, 4 IMU sensors → 36 raw signals, 108 statistical features  
- ⚙️ **Methods:**  
  - Classifiers: Adaboost (best), RF, SVM, MLP + ensembles  
  - Preprocessing: downsampling, normalization, 50% sliding windows  
  - Oversampling: SMOTE for minority class (user)  
  - Validation: 10-fold cross-validation across users and gestures  
- 📈 **Performance:**  
  - 1.3% Equal Error Rate with Adaboost  
  - 99.3% weighted F1-score in user identification  
  - Best results achieved using only RotVec + GeoMag (2 sensors)  

---

**Tags:** `#MachineLearning` `#Wearables` `#EdgeAI` `#SensorFusion` `#IMU` `#BehavioralBiometrics` `#TimeSeriesClassification` `#UserAuthentication` `#Identification`
