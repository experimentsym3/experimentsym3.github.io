---
layout: page
title: Who’s Wearing the Glasses?
description: User authentication and identification using head movements for smart glasses
img: assets/img/projects/1_project/cover1.png
importance: 1
category: Wearable Sensing & Human Activity Understanding
related_publications: false
---

### ✨ Motivation

Smart glasses are gaining traction across domains like healthcare, education, and industrial training - yet they lack robust, user-friendly methods for personal authentication. Touch-based or alphanumeric methods (e.g., PINs) are often infeasible due to limited or no interface. Linking them to mobile devices is not only inconvenient but also introduces pairing dependencies and security vulnerabilities.

This project addresses a critical gap: **How can we design an intuitive, privacy-preserving, and on-device authentication mechanism for smart glasses that does not rely on external devices or intrusive biometrics?**

We hypothesize that **head movement patterns**, captured via built-in inertial sensors (IMU), can serve as behavioral biometrics unique to individuals. This approach has several advantages:
- **Device-native**: No need for extra hardware or external sensors  
- **Passive and natural**: Users only perform simple, intuitive gestures  
- **Lightweight**: Designed with edge deployment in mind (e.g., minimal features, low compute)

The project advances both **user authentication** and **user identification** on wearable head-mounted displays (HMDs) through gesture-based behavioral modeling - contributing to the broader field of human-centered, privacy-preserving AI.

---

### 🔗 Links  
- [Project on GitHub](https://github.com/sumeyye-agac/glass-data-participant-detection)  
- [Published Paper (SN Computer Science, 2023)](https://doi.org/10.1007/s42979-023-02202-4)

---

### 👤 Head Gestures
<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/circle_gesture.png" title="Circle" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/square_gesture.png" title="Square" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/tilt_gesture.png" title="Tilt" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="row mt-3">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/triangle_gesture.png" title="Triangle" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/updown_gesture.png" title="Up-Down" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/turn_gesture.png" title="Turn" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Visual instructions for the six head gestures used in the project.
</div>

---

### 📈 3D Sensor Plots
<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/circle.png" title="Circle (3D)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/square.png" title="Square (3D)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/tilt.png" title="Tilt (3D)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="row mt-3">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/triangle.png" title="Triangle (3D)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/updown.png" title="Up-Down (3D)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/1_project/turn.png" title="Turn (3D)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  3D plots of motion sensor data for each gesture - showing how different participants execute each gesture uniquely.
</div>

---

### 🧊 Architecture Overview

The system processes motion data from smart glasses to authenticate and identify users based on their head gestures. Data is collected from four onboard sensors (accelerometer, gyroscope, rotation vector, geomagnetic), segmented into 1-second windows, and represented using simple statistical features. We frame authentication as a binary classification task and identification as multi-class, evaluating models like Adaboost and Random Forest. With minimal preprocessing and lightweight models, the system achieves up to 99.3% F1-score and 1.3% EER using only two or three sensors, enabling accurate, on-device user recognition.


<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/1_project/architecture.png" title="System Architecture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

#### 3. Performance Evaluation
- Authentication metric: Equal Error Rate (EER)
- Identification metric: Weighted F1-score
- Best results: 1.3% EER with Adaboost, 99.3% F1-score with Random Forest

---

### 📊 Results

We modeled:
- **Authentication** as binary classification (user vs. impostor)  
- **Identification** as multi-class classification (which user is wearing the glasses?)

Using lightweight statistical features (mean, min, max) over 1s windows, we achieved:

| Task              | Best Performance        | Classifier     | Sensors Used              |
|------------------|-------------------------|----------------|---------------------------|
| **Authentication** | 1.3% Equal Error Rate   | Adaboost       | Rotation Vector + GeoMag |
| **Identification** | 99.3% F1-score          | Random Forest  | Acc + RotVec + GeoMag    |

---

### ⚙️ Technical Stack
- **Hardware**: Epson Moverio BT-350 Smart Glasses  
- **Sensors**: Accelerometer, Gyroscope, Rotation Vector, Geomagnetic  
- **Features**: Mean, Min, Max in 1s windows  
- **Models**: Adaboost, Random Forest, SVM, MLP  
- **Tools**: Python, Scikit-learn, SMOTE, Matplotlib
