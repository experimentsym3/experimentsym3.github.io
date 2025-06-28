---
layout: page
title: Attention-Based Knowledge Distillation for Efficient HAR
description: Lightweight human activity recognition with knowledge distillation and attention modules, demonstrating high accuracy and low compute cost on wearable sensor data.
img: assets/img/projects/8_project/modelsizes_wisdm2.png
importance: 9
category: work
related_publications: false
---

### ✨ Motivation

This project explores how **knowledge distillation and attention mechanisms** can be combined to train efficient deep learning models for **Human Activity Recognition (HAR)**. The goal was to achieve **high recognition accuracy with low computational cost** on wrist-worn sensor data, enabling practical deployment on resource-constrained devices.

---

### 🔗 Links

- [Project on GitHub](https://github.com/sumeyye-agac/attention-distillation-HAR)

---

### 🧠 Method Overview

The core idea is to **transfer knowledge** from a large, accurate *teacher* model (OM/MM) to a lightweight *student* model (LM), while also incorporating **channel and spatial attention modules** into the student. 

- **Teacher Model:** Generates soft target distributions and internal attention maps.
- **Student Model:** Learns to mimic both predictions and attentions.
- **Loss Function:** Weighted combination of:
  - Student prediction loss (cross-entropy with ground truth)
  - Distillation loss (matching softened outputs)
  - Attention loss (matching teacher attention maps)

*Architecture Example:*

![Distillation + Attention Architecture](/assets/img/projects/8_project/distillation_attention_architecture2.png)

---

### ⚙️ Model Components

**Channel Attention (CA):** Learns which sensor channels (axes) are most informative.  
**Spatial Attention (SA):** Learns where in time the important patterns occur.  
**Distillation Mechanism:** Uses a temperature scaling parameter *T* to soften teacher logits, providing richer supervisory signal to the student.  

---

### 🛠️ Implementation Highlights

- **Datasets:**
  - Opportunity
  - WISDM
  - UCI Sensors
- **Sensors:**
  - Accelerometer (ACC)
  - Gyroscope (GYR)
- **Metrics:**
  - F1-Score
  - Accuracy
  - FLOPs (compute)
  - Parameter count
- **Variants:**
  - LM (student)
  - LM-Att (student + attention)
  - RB-KD (rule-based distillation)
  - RB-KD-Att
  - RAB-KD (attention distillation)
- **Training:**
  - Optimizer: Adam
  - Temperature scaling applied for soft targets

---

### 🧪 Results and Visualizations

---

#### 📊 Model Sizes across Datasets

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/8_project/modelsizes_opp2.png" alt="Model Sizes - Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Model Sizes – Opportunity Dataset</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/8_project/modelsizes_wisdm2.png" alt="Model Sizes - WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Model Sizes – WISDM Dataset</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/8_project/modelsizes_sensors2.png" alt="Model Sizes - Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Model Sizes – Sensors Dataset</em></p>
  </div>
</div>

---

#### 🟢 Performance Comparisons (Recognition)

**Opportunity Dataset:**

<img src="/assets/img/projects/8_project/opportunity_attdist_results.png" alt="Opportunity Results" class="img-fluid rounded z-depth-1">

**WISDM Dataset:**

<img src="/assets/img/projects/8_project/wisdm_attdist_results.png" alt="WISDM Results" class="img-fluid rounded z-depth-1">

**Sensors Dataset:**

<img src="/assets/img/projects/8_project/sensors_attdist_results.png" alt="Sensors Results" class="img-fluid rounded z-depth-1">

---

#### 🔵 Performance Comparisons (Resource Use)

**Opportunity:**
<img src="/assets/img/projects/8_project/dist_att_resource.png" alt="Resource Trade-offs Opportunity" class="img-fluid rounded z-depth-1">

**WISDM:**
<img src="/assets/img/projects/8_project/dist_att2_resource.png" alt="Resource Trade-offs WISDM" class="img-fluid rounded z-depth-1">

**Sensors:**
<img src="/assets/img/projects/8_project/dist_att3_resource.png" alt="Resource Trade-offs Sensors" class="img-fluid rounded z-depth-1">

---

#### 🟣 Bubble Charts (Accuracy vs. Compute)

These visuals summarize the **trade-off between recognition performance and FLOPs**, highlighting how *attention distillation approaches yield strong performance with much lower compute* compared to monolithic teacher models.

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/8_project/dist_att_rec.png" alt="Bubble Chart Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>F1-Score vs. FLOPs – Opportunity</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/8_project/dist_att2_rec.png" alt="Bubble Chart WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>F1-Score vs. FLOPs – WISDM</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/8_project/dist_att3_rec.png" alt="Bubble Chart Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>F1-Score vs. FLOPs – Sensors</em></p>
  </div>
</div>

---

### 📝 Key Takeaways

- **Distillation Benefits:** Knowledge distillation alone improved F1-scores by 4–6% depending on dataset.
- **Attention Modules:** Channel and spatial attention further boosted recognition accuracy, especially on WISDM.
- **Efficiency:** Compared to the original monolithic models, the distilled student networks required **up to 10× fewer FLOPs** with minimal accuracy loss.
- **Best Configuration:** RAB-KD consistently delivered the best trade-off, outperforming simpler distillation variants.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy
- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Hardware:** Experiments performed on GPU-enabled compute node

---

Feel free to adapt this pipeline to your own HAR tasks or other sensor-based applications!