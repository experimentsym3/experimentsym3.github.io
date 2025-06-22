---
layout: page
title: User Classification for Smart Glasses: From Authentication to Identification
description: IMU-based, on-device user detection system for wearable smart glasses
img: assets/img/12.jpg
importance: 1
category: work
giscus_comments: true
---

### 👓 User Classification for Smart Glasses: From Authentication to Identification  
**A real-time, on-device system for detecting user presence, authenticating, and identifying individuals via motion sensor data from smart glasses.**

This project builds a full pipeline for on-device classification based on IMU data from smart glasses. It enables wearable devices to detect whether they’re being worn — a critical step before authentication, identification, or activity recognition tasks. The system is optimized for embedded hardware using classical ML methods and minimal compute.

---

### 🎯 Project Summary

- **Goal:** Enable presence-aware filtering and secure personalization on head-mounted displays  
- **Device:** Epson Moverio BT-350 smart glasses  
- **Sensors:** Accelerometer, Gyroscope, Geomagnetic, Rotation Vector  
- **Data:** 17 participants, 6 gestures, 110/55 Hz sampling  
- **Model Input:** 1-second windows, 108 time-domain features  
- **Output:** Binary classification (worn or not), multiclass user ID

---

### 💡 System Pipeline

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/architecture.png" title="System Architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
    The system segments IMU signals into 1-second windows and classifies user presence. When a user is detected, the system supports authentication and identification.
</div>

---

### 📐 Gesture Design & Data Collection

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/1_project/head_movements.png" title="Gesture Set" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Participants performed 6 head gestures: circle, up-down, tilt, triangle, turn, and square. Each gesture creates distinct IMU patterns across users.
</div>

---

### 🔍 User-Level Signal Variation

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/1_project/3dplots.png" title="3D IMU Signal Patterns" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example 3D traces show user-dependent variation — a key for biometric classification.
</div>

---

### 📊 Classifier Performance

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/1_project/classifiers.png" title="Classifier Comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/1_project/far_frr_eer.png" title="Authentication Error Metrics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Adaboost consistently achieved lowest error rates across gestures. Best authentication result: 1.3% EER with triangle gesture using RotVec + GeoMag.
</div>

---

### 🔧 Model Optimization

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/1_project/participant_based2.png" title="Error Reduction After SMOTE + Sliding Window" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/1_project/eer_results.png" title="Sensor Fusion Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Using only 2 sensors (RotVec + GeoMag) and a simple triangle gesture provided robust results — suitable for deployment on embedded hardware.
</div>

---

### 🧠 Technical Stack & Contributions

- Time-Series Segmentation (1s windows with 50% overlap)  
- Feature Extraction: mean, min, max per axis (no deep features)  
- Classifiers: Adaboost (best), RF, SVM (poly/RBF), MLP, model ensembles  
- Class imbalance handled via <code>SMOTE</code>  
- Evaluated using 10-fold cross-validation across participants  

---

### ✅ Outcomes

- 🔐 **Authentication**: 1.3% EER  
- 🧍 **Identification**: 99.3% weighted F1-score  
- ⚡ **Optimized for wearables**: no deep learning, no high-power processing  
- 📰 **Published** in <em>SN Computer Science (Springer, 2023)</em>

---

### 🔗 Resources  
- 📁 <a href="https://github.com/sumeyye-agac/glass-data-participant-detection" target="_blank">GitHub Repository</a>  
- 📄 <a href="https://doi.org/10.1007/s42979-023-02202-4" target="_blank">Published Paper</a>

---

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3">
    <p><strong>Tags:</strong></p>
    <ul>
      <li><code>#UserAuthentication</code> – Lightweight IMU-based classification with 1.3% EER</li>
      <li><code>#Identification</code> – Achieved 99.3% F1-score using behavioral biometrics</li>
      <li><code>#EdgeAI</code> – Runs on-device with minimal compute and handcrafted features</li>
      <li><code>#SensorFusion</code> – Used RotVec + GeoMag for optimal balance of performance and efficiency</li>
      <li><code>#TimeSeriesClassification</code> – Sliding window + SMOTE for sequential signal learning</li>
      <li><code>#WearableComputing</code> – System built and tested on real smart glass hardware</li>
    </ul>
  </div>
</div>
