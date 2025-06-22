---
layout: page
title: User Classification for Smart Glasses: From Authentication to Identification
description: IMU-based, on-device user detection system for wearable smart glasses
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

<h2>👓 User Classification for Smart Glasses: From Authentication to Identification</h2>
<p><strong>A real-time system for detecting user presence, authenticating, and identifying individuals via motion sensor data from smart glasses — optimized for wearable deployment.</strong></p>

<hr>

<h3>🎯 Project Overview</h3>
<p>This project presents a complete on-device machine learning solution to detect whether a smart glass device is being worn — a crucial step before launching activity recognition, personalization, or authentication models. It also supports user identification based on behavioral biometrics.</p>

<hr>

<h3>💡 Motivation</h3>
<p>Wearable devices continuously collect motion data — even when they're not being worn. Processing this noise leads to unreliable predictions and privacy concerns. This system ensures that only valid, user-generated data is accepted, unlocking smarter and safer wearables.</p>

<hr>

<h3>⚙️ System Pipeline</h3>
<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/architecture.png" title="System Pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<p>Data is collected from IMU sensors, segmented into 1-second windows, and classified using lightweight models — enabling presence detection, authentication, and identification directly on the device.</p>

<hr>

<h3>🧪 Dataset & Gesture Design</h3>
<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/head_movements.png" title="Gesture Set" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<ul>
  <li>17 participants</li>
  <li>6 gestures: circle, up-down, tilt, triangle, turn, square</li>
  <li>Device: Epson Moverio BT-350</li>
  <li>Sensors: Accelerometer, Gyroscope, Rotation Vector, Geomagnetic</li>
  <li>Sampling rates: 110 Hz / 55 Hz</li>
</ul>

<hr>

<h3>📉 Signal Variation Across Users</h3>
<div class="row">
  <div class="col-sm-12 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/3dplots.png" title="3D IMU Traces by User" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<p>Clear differences in gesture execution across users enabled robust identification using only IMU data.</p>

<hr>

<h3>📊 Key Results</h3>
<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/classifiers.png" title="Classifier Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/far_frr_eer.png" title="EER / FAR / FRR per Gesture" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<ul>
  <li><strong>Authentication:</strong> 1.3% EER using triangle gesture with RotVec + GeoMag</li>
  <li><strong>Identification:</strong> 99.3% F1-score using Random Forest and 3-sensor fusion</li>
  <li><strong>Models:</strong> Adaboost, RF, SVM, MLP; SMOTE applied to handle class imbalance</li>
  <li><strong>Optimized for edge:</strong> uses only mean, min, max — no deep learning needed</li>
</ul>

<div class="row">
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/participant_based2.png" title="Error Reduction with Optimizations" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3">
    {% include figure.liquid path="assets/img/projects/1_project/eer_results.png" title="Sensor Fusion Results Table" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<hr>

<h3>🧾 Summary of Key Achievements</h3>
<p>This project proposes a complete machine learning pipeline for <strong>on-device user presence detection, authentication, and identification</strong> using only motion sensor data from smart glasses. It addresses a real-world problem in wearable AI: ensuring that only valid, user-generated IMU data is processed for downstream personalization, recognition, or security tasks.</p>

<ul>
  <li><strong>📌 Motivation:</strong> Smart glasses collect IMU data even when left idle. Detecting when the device is worn — and by whom — is critical for safety, context-awareness, and personalization.</li>

  <li><strong>📦 Dataset:</strong> 17 users, 6 gestures, 4 IMU sensors; 1-second windows → 108 features (mean, min, max per axis)</li>

  <li><strong>⚙️ Methods:</strong> 
    <ul>
      <li>Preprocessing: downsampling, normalization, 50% overlap sliding windows</li>
      <li>Models: Adaboost, RF, MLP, SVM (poly/RBF) + ensembles</li>
      <li>Class balancing: SMOTE applied for underrepresented user class</li>
      <li>Validation: 10-fold cross-validation across gestures and users</li>
    </ul>
  </li>

  <li><strong>📈 Results:</strong> 
    <ul>
      <li>Authentication: <strong>1.3% EER</strong> using triangle + RotVec+GeoMag + Adaboost</li>
      <li>Identification: <strong>99.3% weighted F1</strong> using RF and 3-sensor fusion</li>
      <li>Best performance achieved with only 2 sensors, supporting faster and energy-efficient deployment</li>
    </ul>
  </li>

  <li><strong>🧠 Impact:</strong> Efficient, deployable, and real-time — this system runs on smart glasses using only classical ML and statistical features, making it ideal for edge applications. Results were peer-reviewed and published.</li>
</ul>

<h4>🔗 Resources</h4>
<ul>
  <li>📁 <a href="https://github.com/sumeyye-agac/glass-data-participant-detection" target="_blank">GitHub Repository</a></li>
  <li>📄 <a href="https://doi.org/10.1007/s42979-023-02202-4" target="_blank">Published Paper (SN Computer Science, 2023)</a></li>
</ul>

<p><strong>Keywords:</strong> 
<code>#UserAuthentication</code> 
<code>#Identification</code> 
<code>#EdgeAI</code> 
<code>#WearableComputing</code> 
<code>#SensorFusion</code> 
<code>#TimeSeriesClassification</code> 
<code>#BehavioralBiometrics</code>
</p>
