---
layout: page
title: User Authentication and Identification on Smart Glasses with Motion Sensors
description: 
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

### 👓 Participant Detection from Smart Glass IMU Data

This project implements a lightweight classification system to detect whether smart glasses are being worn, using motion sensor data. It filters out irrelevant or unattended sessions, improving the reliability of downstream tasks such as human activity recognition or user identification.

This detection system forms the foundation of a broader on-device behavioral biometrics framework published in *SN Computer Science*. The models are optimized for real-time use on edge devices using minimal features (mean, min, max) for efficiency.

📄 [Published Paper (SN Computer Science)](https://doi.org/10.1007/s42979-023-02202-4)  
📁 [View Code on GitHub](https://github.com/sumeyye-agac/glass-data-participant-detection)

---

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/glass_gestures.jpg" title="Figure 3 – Head Gestures" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/glass_3d_gesture_samples.jpg" title="Figure 4 – 3D Gesture Traces" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Gesture types and user-specific IMU signal variations.
</div>

---

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/glass_dataset_summary_table.jpg" title="Table 2 – Dataset Summary" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/glass_classifier_eer.jpg" title="Figure 6 – Classifier EER Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Overview of the dataset and classifier performances — Adaboost led across sensor-gesture pairs.
</div>

---

<div class="row">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/glass_sensor_combination_table.jpg" title="Table 4 – Sensor Combination Results" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/glass_optimization_comparison.jpg" title="Figure 7 – Optimization Impact" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Best performance achieved with just two sensors (RotVec + GeoMag) and a triangle gesture.
</div>

---

**Highlights:**
- 17-participant dataset, collected on Epson Moverio BT-350 smart glasses  
- Sensors: Accelerometer, Gyroscope, Geomagnetic, Rotation Vector  
- Best authentication EER: **1.3%**  
- Best identification F1-Score: **99.3%**

**Tags:** `#WearableAI` `#SensorFusion` `#IMU` `#BiometricSecurity` `#EdgeML`
