---
layout: page
title: Smart Glass Participant Detection
description: On-device user presence detection using wearable IMU data
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

### 👓 Smart Glass Participant Detection  
**Lightweight, on-device classification of user presence using IMU data.**

This project explores a real-world deployment scenario where a smart glass device should only collect data when being actively worn. Using data from motion sensors (IMUs), we trained binary classifiers to distinguish between valid and invalid (non-user) sessions.

This system acts as a gatekeeper for more complex models like user authentication and human activity recognition (HAR). It’s built for **low-compute wearable environments** — using simple time-domain features and machine learning models optimized for embedded hardware.

🔗 [View code on GitHub](https://github.com/sumeyye-agac/glass-data-participant-detection)  
📄 [Published Paper (SN Computer Science)](https://doi.org/10.1007/s42979-023-02202-4)

---

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/head_movements.png" title="Figure – Gesture Design for Smart Glass" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  A total of six simple head gestures were designed: circle, up-down, tilt, triangle, turn, and square.
</div>

---

### 🔧 Methodology Overview
<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/architecture.png" title="Pipeline: From IMU to Presence Detection" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Raw IMU data is preprocessed, segmented, and classified using lightweight models for presence detection and later, authentication and identification.
</div>

---

### 📊 Signal Characteristics & Variability

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/3dplots.png" title="Sensor Traces from Different Volunteers" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Sample gesture traces from three users using different sensors show intra- and inter-user variability, a core challenge in wearable ML.
</div>

---

### 🧠 Performance Analysis

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/classifiers.png" title="Classifier Comparison (EER %)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Adaboost consistently outperformed Random Forest, SVM, and MLP for user authentication using individual sensors.
</div>

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/far_frr_eer.png" title="Best Results by Gesture (EER, FAR, FRR)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The best gesture for authentication was <b>triangle</b> using rotation vector + geomagnetic sensors, achieving 1.3% EER.
</div>

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/participant_based2.png" title="Per-user Error Reduction (Before/After Optimization)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Adding sliding window and SMOTE-based oversampling significantly reduced error rates across users.
</div>

<div class="row">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/eer_results.png" title="Table – Best Sensor Combinations per Gesture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Using just two sensors (RotVec + GeoMag) was enough to achieve top-tier accuracy, making the system deployable even on constrained wearables.
</div>

---

### ✅ Key Takeaways
- **Sensor Modalities**: Accelerometer, Gyroscope, Geomagnetic, and Rotation Vector
- **Deployment Target**: Smart glass (Epson Moverio BT-350) running Android-based logging app
- **Best Results**:  
  - Authentication: **1.3% EER**  
  - Identification: **99.3% weighted F1-score**  
- **Edge Optimized**: Models trained with only 3 time-domain features (mean, min, max) per window

**Tags:** `#SensorFusion` `#Wearables` `#BehavioralBiometrics` `#IMU` `#EdgeML` `#EmbeddedAI`
