---
layout: page
title: Wrist Motion Feature Engineering
description: Activity recognition study analyzing motion, orientation, and rotation features from wrist-worn accelerometer data to classify daily activities.
img: assets/img/projects/7_project/figure4.png
importance: 7
category: research
related_publications: true
---

### ✨ Motivation

This project investigates how different feature sets derived from wrist-worn accelerometer data can be used to recognize daily activities. Unlike smartphone-based approaches that rely on pocket placement, wrist-worn devices capture hand and arm movements and provide richer signals for activities such as eating, smoking, and writing. The work focused on extracting and evaluating motion, orientation, and rotation features to compare their impact on classification accuracy.

---

### 🔗 Links

- [Publication DOI](https://doi.org/10.5220/0006007100760084)

---

### ⚙️ Implementation Highlights

- **Sensor Placement:** Samsung Galaxy S2 phone attached to the right wrist to emulate smartwatch usage.
- **Sampling Rate:** 50 Hz accelerometer, linear accelerometer, and gyroscope data.
- **Feature Sets:**
  - Motion features computed from acceleration magnitude.
  - Orientation features derived from 3-axis accelerometer signals.
  - Rotation features computed as pitch and roll angles.
- **Activities:** 13 activities including eating, typing, writing, drinking, smoking, walking, jogging, biking, sitting, standing, and stair use.
- **Classifiers:** Decision Tree, Naive Bayes, and Random Forest.

---

### 🛠️ Workflow

1. **Data Collection:**  
   Recorded sensor data from 10 participants performing all activities.
2. **Feature Extraction:**  
   Computed time-domain and frequency-domain descriptors for each window.
3. **Preprocessing:**  
   20-second non-overlapping windows created.
4. **Classification:**  
   10-fold cross-validation for all classifier-feature combinations.
5. **Evaluation:**  
   Recognition performance compared across configurations.

---

### 🧩 Feature Extraction Details

For each 20-second window, the following features were computed to characterize motion, orientation, and rotation:

**Time-Domain Features (per axis):**
- Mean
- Standard Deviation
- Skewness
- Kurtosis
- Energy
- Entropy

**Frequency-Domain Features:**
- Dominant frequency component
- Amplitude of dominant frequency

**Rotation Features (Pitch and Roll):**
- Same statistical features computed from rotation angles derived via accelerometer.

**Windowing Parameters:**
- Window length: 20 seconds
- Overlap: None
- Sampling rate: 50 Hz

---

### 🧪 Results and Visualizations

This study compared raw acceleration, linear acceleration, and gyroscope-derived rotation features across multiple classifiers and feature combinations.

---

**Figure 1 – Raw Acceleration Signals**

<img src="/assets/img/projects/7_project/figure1.png" alt="Raw Acceleration Signals" class="img-fluid rounded z-depth-1">
<p class="mt-2 text-center"><em>Example X, Y, Z axes and magnitude signals recorded during selected activities.</em></p>

---

**Figure 2 – Rotation Angles**

<img src="/assets/img/projects/7_project/figure2.png" alt="Rotation Angles" class="img-fluid rounded z-depth-1">
<p class="mt-2 text-center"><em>Computed pitch and roll rotation angles from accelerometer data.</em></p>

---

**Figure 3 – Accuracy of Feature Sets**

<img src="/assets/img/projects/7_project/figure3.png" alt="Feature Set Accuracy" class="img-fluid rounded z-depth-1">
<p class="mt-2 text-center"><em>Average recognition accuracy for motion, orientation, and rotation features, with and without combinations.</em></p>

---

**Figure 4 – Classifier Comparison**

<img src="/assets/img/projects/7_project/figure4.png" alt="Classifier Comparison" class="img-fluid rounded z-depth-1">
<p class="mt-2 text-center"><em>Classification accuracy comparison across Naive Bayes, Decision Tree, and Random Forest classifiers.</em></p>

---

**Figure 5 – Activity Recognition Accuracy**

<img src="/assets/img/projects/7_project/figure5.png" alt="Activity Accuracy" class="img-fluid rounded z-depth-1">
<p class="mt-2 text-center"><em>Recognition accuracy per activity label, showing performance variation across activities.</em></p>

---

### 📝 Reflections

- **Feature Contribution:**  
  Orientation features provided the highest discriminative power among individual feature sets.
- **Classifier Selection:**  
  Random Forest consistently outperformed other classifiers, achieving up to 89% accuracy with combined features.
- **Sensor Efficiency:**  
  Accelerometer-only configurations remained competitive and offered lower power consumption.
- **Rotation Features:**  
  Gyroscope-derived rotation features slightly improved recognition for stair-related activities but had limited overall impact.
- **Window Size:**  
  Longer window durations improved recognition for activities with longer temporal patterns.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** NumPy, Scikit-learn
- **Hardware:** Samsung Galaxy S2 sensors (accelerometer, linear acceleration, gyroscope)
- **Evaluation:** 10-fold stratified cross-validation

