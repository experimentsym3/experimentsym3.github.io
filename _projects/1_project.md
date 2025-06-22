---
layout: page
title: User Classification for Smart Glasses: From Authentication to Identification
description: Detecting user presence and identity using on-device IMU data from smart glasses
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
giscus_comments: true
---

Smart glasses continuously stream motion sensor data, but traditional systems treat all of it the same — regardless of whether the device is actually being worn. This can lead to irrelevant or misleading signals being used for downstream tasks such as activity recognition or access control.

This project introduces a real-time, on-device system that filters out such noise by determining whether the glasses are actively worn. When worn, it authenticates the rightful user and can even identify them — using only IMU data and lightweight machine learning models optimized for embedded hardware.

---

### System Overview

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/architecture.png" title="System Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

The system collects motion data from smart glasses, segments it into time windows, and extracts simple time-domain features. Classification is performed at three levels:
- **Presence Detection**: Is the device being worn?  
- **Authentication**: Is the current user the authorized one?  
- **Identification**: Which user is wearing the device?

All predictions are made on-device in real time.

---

### Dataset & Gesture Design

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/head_movements.png" title="Head Gesture Set" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

A custom dataset was collected from 17 participants wearing Epson Moverio BT-350 smart glasses. Each participant performed six predefined head gestures (triangle, square, up-down, etc.). Data was gathered from:
- 4 motion sensors: Accelerometer, Gyroscope, Rotation Vector, Geomagnetic  
- Sampling rates: 110 Hz (Acc/Gyro), 55 Hz (GeoMag/RotVec)  
- Signals segmented into 1-second windows with 50% overlap  
- Each window encoded with 108 features (mean, min, max across axes)

---

### Signal Variation Across Users

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/3dplots.png" title="3D IMU Patterns" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Users executed the same gestures in distinct ways. This variation became a reliable behavioral signal — enabling identity recognition from motion alone.

---

### Methods

A range of models were implemented and compared:

- **Preprocessing**: normalization, statistical feature extraction, overlapping windowing  
- **Classifiers**:  
  - Adaboost (most effective overall)  
  - Random Forest  
  - SVM (RBF and polynomial kernels)  
  - MLP  
  - Model ensembles (SVM + MLP, etc.)  
- **Class imbalance** was addressed using SMOTE  
- Evaluations were performed using 10-fold cross-validation on gesture-specific splits

---

### Results

Without relying on deep learning or cloud computation, the system achieved:

- **1.3% Equal Error Rate** for user authentication, using only the triangle gesture and two sensors (Rotation Vector + Geomagnetic)  
- **99.3% weighted F1-score** for identifying users across 17 participants, with Random Forest and sensor fusion  
- Sliding window and SMOTE significantly improved generalization  
- High performance was maintained even with just two sensors — making it suitable for energy-efficient, on-device deployment

---

### Why It Matters

This system proves that reliable user detection and identification can be done entirely on-device, with minimal compute, using handcrafted features. It supports smarter, more secure wearable experiences without the need for continuous cloud connection or power-hungry models.

The approach is generalizable to other wearable contexts and was validated through peer-reviewed publication.

---

### 🔗 Resources  
- 📁 [GitHub Repository](https://github.com/sumeyye-agac/glass-data-participant-detection)  
- 📄 [Published Paper](https://doi.org/10.1007/s42979-023-02202-4)

---

**Tags:**  
`#UserAuthentication` `#EdgeAI` `#BehavioralBiometrics` `#Wearables`  
`#SensorFusion` `#IMU` `#TimeSeriesClassification` `#Human-CenteredAI`
