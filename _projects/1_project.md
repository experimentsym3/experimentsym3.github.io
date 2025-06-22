---
layout: page
title: User Classification for Smart Glasses: From Authentication to Identification
description: On-device user presence detection using wearable IMU data
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

### 👓 Smart Glass Participant Detection  
**A lightweight, on-device model to detect user presence using smart glasses’ motion sensors.**

---

### 🚀 Why It Matters  
Wearables continuously generate sensor data — but not all of it is meaningful. This project tackles the practical problem of detecting whether a smart glass device is actively being worn. It ensures that downstream applications like human activity recognition (HAR) or user authentication don’t process irrelevant or noisy data.

---

### ⚙️ System Overview  

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/architecture.png" title="System Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

We collect IMU data from smart glasses, extract low-cost features, and classify each segment as "user" or "no-user" — all on-device, with real-time capability.

---

### 🧪 Dataset & Gesture Design  

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/head_movements.png" title="Gesture Set" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- **17 participants**, each performing 6 gestures  
- **Device**: Epson Moverio BT-350  
- **Sensors**: Accelerometer, Gyroscope, Rotation Vector, Geomagnetic  
- **Sampling**: 110 Hz (Acc/Gyr), 55 Hz (GeoMag/RotVec)

---

### 📉 Sensor Signals: User Variation  

<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/3dplots.png" title="3D IMU Traces by User" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Gestures produce distinct patterns across users and sensors — a foundation for both authentication and filtering.

---

### 📊 Results Summary  

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/classifiers.png" title="Classifier Comparison (EER %)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/far_frr_eer.png" title="EER/FAR/FRR by Gesture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- **Adaboost outperforms** RF, SVM, and MLP across all gestures  
- Triangle gesture with RotVec+GeoMag achieves **1.3% EER**

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/participant_based2.png" title="Optimization Impact by User" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/eer_results.png" title="Sensor Fusion Results Table" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- Oversampling + sliding window reduced EER across users  
- Using **only 2 sensors** yields performance comparable to 3–4 sensor setups

---

### 🔑 Key Takeaways

- ✅ **1.3% EER** with triangle gesture  
- ✅ **Only 3 features per signal**: mean, min, max  
- ✅ Runs efficiently on wearable hardware (no deep learning required)  
- ✅ Dataset + logger developed in-house  
- ✅ Supports further steps like authentication & identification  

---

### 🔗 Resources  
- 📁 [GitHub Repository](https://github.com/sumeyye-agac/glass-data-participant-detection)  
- 📄 [Published Paper (SN Computer Science)](https://doi.org/10.1007/s42979-023-02202-4)

**Tags:** `#EdgeAI` `#Wearables` `#SensorFusion` `#IMU` `#BehavioralBiometrics` `#MachineLearning`
