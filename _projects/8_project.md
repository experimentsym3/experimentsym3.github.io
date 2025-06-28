---
layout: page
title: Context-Aware Dynamic Activity Recognition on Wearables
description: Development of a dynamic HAR pipeline adapting sampling rate, window length, and sensor usage to improve accuracy and efficiency on smartwatches.
img: assets/img/projects/8_project/Res-FScore-rev.png
importance: 8
category: work
related_publications: false
---

### ✨ Motivation

This project investigated how **dynamic, context-aware adaptation** can improve human activity recognition (HAR) on wrist-worn devices. Unlike static pipelines with fixed sampling and feature extraction, this system **adjusts configurations at runtime** based on activity complexity to balance **accuracy, battery consumption, and computational cost**.

---

### 🔗 Links

- [Publication](https://doi.org/10.1016/j.compeleceng.2020.106949)

---

### 🧠 Method Overview

The architecture includes **three main modules**, illustrated in the flowchart below:

<div class="row mt-3">
  <div class="col-sm-12 text-center">
    <img src="/assets/img/projects/8_project/Fig1_RevisionNov2020.png" alt="System Flowchart" class="img-fluid rounded z-depth-1">
    <p class="mt-2"><em>System Flowchart – State Detection, Session Management, and Classification Modules</em></p>
  </div>
</div>

---

#### 🚦 1. State Detection Module
- **Purpose:** Identify if the current activity is *simple* or *complex*.
- **How it works:**
  - Reads accelerometer (ACC) data in sliding windows.
  - If the last detected state was complex, gyroscope (GYR) data are also read.
  - Uses a **rule-based algorithm** (Section 3.3 of the paper) to decide state transitions.
  - If an activity persists for >60 seconds, it triggers a classification phase.

---

#### 🗂️ 2. Session Module
- **Purpose:** Track sessions of the same activity over time.
- **Functionality:**
  - Determines whether the activity already exists in the dictionary.
  - Updates average F1-score and occurrence count.
  - Prepares session context for classification.

---

#### 🧩 3. Classification Module
- **Purpose:** Classify the detected session with an appropriate model.
- **Dynamic configuration:**
  - *Simple Session:*
    - Low-frequency sampling
    - Lightweight feature set
    - ACC data only
  - *Complex Session:*
    - High-frequency sampling
    - Richer feature set
    - ACC + GYR data
  - The module then computes the F1-score and updates session metrics.

---

### ⚙️ Technical Highlights

**Sensor and Data Configurations**
- **Sensors:** 3-axis accelerometer, 3-axis gyroscope
- **Sampling Rates:** 1 Hz to 50 Hz
- **Window Sizes:** 5–30 seconds
- **Feature Types:**
  - Statistical (mean, std, range)
  - Frequency domain (energy, entropy)

**Dynamic Adaptation**
- The state detection algorithm automatically:
  - Reduces sampling when the user is static
  - Switches to richer features and higher sampling when complex motion is detected
- This ensures **energy savings without compromising classification performance**.

---

### 🧪 Results and Insights

**Resource and Performance Comparison**
Experiments evaluated Static, Semi-Dynamic, and Dynamic configurations:

- **Static:** Always uses full sensor set and highest sampling.
- **Semi-Dynamic:** Varies sampling rate.
- **Dynamic:** Varies sampling, feature set, and sensor usage.

**Key Findings:**
- Dynamic configuration achieved **highest F1-score (0.78)** while:
  - Reducing CPU time by ~15%
  - Decreasing energy consumption by ~38%
  - Lowering memory usage

**Visual Results:**

<div class="row mt-3">
  <div class="col-sm-6">
    <img src="/assets/img/projects/8_project/Res-FScore-rev2_new.png" alt="Resource vs F1 Score" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Resource Consumption and Accuracy Trade-off</em></p>
  </div>
</div>

**Efficiency Trends:**

- Static configurations consumed significantly more CPU and energy.
- Dynamic configuration flattened CPU and energy curves across sampling rates.
- **Dynamic mode maintained stable memory usage while improving performance.**

<div class="row mt-3">
  <div class="col-sm-6">
    <img src="/assets/img/projects/8_project/CPU-Fsel-rev.png" alt="CPU Time" class="img-fluid rounded z-depth-1">
  </div>
  <div class="col-sm-6">
    <img src="/assets/img/projects/8_project/Energy-Fsel-rev.png" alt="Energy Consumption" class="img-fluid rounded z-depth-1">
  </div>
</div>

---

### ✨ Key Contributions

✅ **Adaptive HAR Pipeline:**  
First system to dynamically switch sampling rate, feature complexity, and sensor set on a smartwatch.

✅ **Rule-Based State Detection:**  
Lightweight state classification enabling context awareness without heavy computation.

✅ **Resource Profiling:**  
Detailed measurements of CPU time, energy, and memory across configurations.

✅ **Improved F1-Score:**  
Demonstrated that dynamic adaptation improves accuracy while reducing resource load.

---

### 📝 Reflections

- **Dynamic configurations consistently outperformed static approaches** in both efficiency and accuracy.
- **Rule-based state detection proved effective and lightweight** for on-device processing.
- Future work could explore personalized thresholds and continuous learning to further optimize adaptation.
- This work demonstrated that **context-aware HAR pipelines are feasible on low-power wearables**.

---

### ⚙️ Technical Stack

- **Languages:** Python
- **Devices:** Wrist-worn IMU sensors
- **Techniques:** Dynamic configuration switching, adaptive feature extraction, energy profiling


