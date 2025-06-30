---
layout: page
title: Efficient Feature Engineering for Wrist Motion Recognition
description: Wearable sensor data pipeline extracting time and frequency features to classify daily activities efficiently
img: assets/img/projects/7_project/figure1.png
importance: 7
category: Wearable Sensing & Human Activity Recognition
related_publications: false
---

### ✨ Motivation

Wearable devices generate vast amounts of motion data, but building a practical recognition pipeline requires more than collecting sensor readings. This project focused on designing an **adaptive activity recognition system** that balances classification accuracy, latency, and energy consumption, targeting scenarios like smoking detection, eating, and locomotion monitoring.

Unlike many prior studies that use fixed data collection parameters, this approach dynamically adjusted sampling rates and window sizes depending on detected motion state (e.g., static vs. complex), aiming for efficient yet reliable recognition.

---

### 🔗 Links

- [Publication](https://dl.acm.org/doi/abs/10.5220/0006007100760084)

---

### ⚙️ Pipeline Overview

The solution consisted of **three main modules**, orchestrated to process incoming wrist-worn accelerometer (ACC) and gyroscope (GYR) data:

**1. State Detection Module**  
- Continuously monitors motion to classify windows as *simple* (low variability) or *complex* (high variability).
- Adjusts sampling frequency and feature extraction configuration in real-time.
- Example: static activities used 1 Hz sampling with 30-second windows, complex ones used 5 Hz sampling with 20-second windows.

**2. Classification Module**  
- Extracts statistical and frequency-domain features from sensor streams.
- Trains separate models for simple and complex states.
- Classifiers include Random Forests and ensemble methods, optimized via cross-validation.

**3. Session Module**
- Aggregates predictions over time.
- Updates per-activity statistics like average F1-scores and session counts.
- Supports tracking user-specific patterns for personalized adaptation.

*Pipeline flowchart:*

<img src="/assets/img/projects/7_project/figure1.png" alt="Pipeline Flowchart" class="img-fluid rounded z-depth-1 mt-3">

---

### 🧠 Feature Extraction Strategy

Features were engineered to capture both temporal and spectral signatures of motion. Selected features included:

- **Time-domain:** mean, variance, standard deviation, skewness, kurtosis.
- **Frequency-domain:** energy and entropy computed via FFT.
- **Correlation metrics:** inter-axis relationships.
- **Range and slope indicators:** to capture transitions.

Notably, the **feature set was adapted** depending on the detected state to reduce computational cost in simple motion contexts.

---

### 🧪 Results and Insights

Key experiments compared static configurations with the dynamic adaptive pipeline across multiple activities and recording scenarios. 

- **Dynamic configuration** achieved higher F1-scores while reducing CPU time and memory consumption.
- For example, complex sessions improved F1-scores by ~15–20% over baseline configurations while maintaining energy consumption below 300 mWh.
- Shorter window durations (e.g., 5–10 seconds) were beneficial for detecting transitions but slightly reduced recognition performance for steady activities.

*Illustrative performance comparison:*

<img src="/assets/img/projects/7_project/f1score_comparison.png" alt="Performance Comparison" class="img-fluid rounded z-depth-1 mt-3">

---

✅ **Key Takeaways**

- **Adaptive Sampling:** Crucial for balancing accuracy and energy usage.
- **Feature Selection:** Combining temporal and spectral features improved robustness.
- **Resource Efficiency:** Dynamic adjustments consistently lowered computation costs compared to static configurations.

---

### 📝 Reflections

Designing this pipeline required careful trade-offs between recognition quality and practicality for real-world wearable deployment. Implementing dynamic sampling and session-based aggregation provided valuable insights into efficient motion sensing strategies.

Feel free to adapt this approach for your own applications, such as health monitoring or gesture recognition on low-power devices!

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** Scikit-learn, NumPy, SciPy, Matplotlib
- **Sensors:** 3-axis accelerometer and gyroscope

