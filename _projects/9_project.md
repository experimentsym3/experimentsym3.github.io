---
layout: page
title: Attention-Based Knowledge Distillation for Efficient HAR
description: Lightweight activity recognition combining knowledge distillation and attention modules to improve performance on wearable sensor data
img: assets/img/projects/9_project/modelsizes_wisdm2.png
importance: 9
category: Wearable Sensing & Human Activity Recognition
related_publications: false
---

### ✨ Motivation

Human Activity Recognition (HAR) models for wearables often face a trade-off between recognition accuracy and computational cost. This project explores combining **knowledge distillation** with **attention mechanisms** to create compact, efficient models that maintain high performance while being deployable on resource-constrained devices.

---

### 🧭 Approach Overview

The proposed framework integrates two ideas:

1. **Knowledge Distillation**: A large, accurate *teacher* model provides soft targets and internal representations to guide a smaller *student* model.
2. **Attention Modules**: Channel and spatial attention layers are added to help the student learn which sensor channels and temporal regions are most informative.

This combination enables the student model to approximate the teacher's predictions and internal focus, resulting in strong accuracy with significantly fewer parameters and FLOPs.

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/distillation_attention_architecture2.png" alt="Distillation + Attention Architecture" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Architecture integrating knowledge distillation with channel and spatial attention modules</em></p>
</div>

---

### 🛠️ Implementation Details

**Teacher Models**
- OM and MM configurations trained to convergence
- Generate soft target distributions and attention maps

**Student Models**
- LM: Lightweight baseline
- LM-Att: LM + attention modules

**Distillation Strategies**
- **RB-KD**: Response-based distillation (matching softened outputs)
- **RB-KD-Att**: RB-KD with student attention
- **RAB-KD**: Response and attention-based distillation (matching outputs and teacher attention)

**Loss Function**
- Weighted sum of:
  - Cross-entropy with ground truth
  - KL divergence between student and teacher soft predictions
  - Attention matching loss

**Datasets**
- **Opportunity**
- **WISDM**
- **UCI Sensors**

**Sensors**
- Accelerometer and gyroscope

**Training**
- Adam optimizer
- Temperature scaling applied to soften logits during distillation

---

### 📊 Model Size Comparisons

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_opp2.png" alt="Model Sizes - Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Model sizes on Opportunity</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_wisdm2.png" alt="Model Sizes - WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Model sizes on WISDM</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_sensors2.png" alt="Model Sizes - UCI Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Model sizes on UCI Sensors</em></p>
  </div>
</div>

---

### 🟢 Recognition Performance

**Opportunity Dataset**

<img src="/assets/img/projects/9_project/opportunity_attdist_results.png" alt="Opportunity Results" class="img-fluid rounded z-depth-1">

**WISDM Dataset**

<img src="/assets/img/projects/9_project/wisdm_attdist_results.png" alt="WISDM Results" class="img-fluid rounded z-depth-1">

**UCI Sensors Dataset**

<img src="/assets/img/projects/9_project/sensors_attdist_results.png" alt="Sensors Results" class="img-fluid rounded z-depth-1">

---

### 🔵 Resource Consumption

**Opportunity**

<img src="/assets/img/projects/9_project/dist_att_resource.png" alt="Resource Use - Opportunity" class="img-fluid rounded z-depth-1">

**WISDM**

<img src="/assets/img/projects/9_project/dist_att2_resource.png" alt="Resource Use - WISDM" class="img-fluid rounded z-depth-1">

**UCI Sensors**

<img src="/assets/img/projects/9_project/dist_att3_resource.png" alt="Resource Use - Sensors" class="img-fluid rounded z-depth-1">

---

### 🟣 Accuracy vs. Compute Trade-Off

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att_rec.png" alt="F1-Score vs FLOPs - Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>F1-Score vs FLOPs – Opportunity</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att2_rec.png" alt="F1-Score vs FLOPs - WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>F1-Score vs FLOPs – WISDM</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att3_rec.png" alt="F1-Score vs FLOPs - Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>F1-Score vs FLOPs – UCI Sensors</em></p>
  </div>
</div>

These visualizations illustrate how combining distillation with attention yields strong recognition while reducing computational load.

---

### 📝 Key Insights

- **Knowledge distillation alone** improved recognition F1-scores by 4–6% across datasets.
- **Adding attention modules** further boosted accuracy, especially on WISDM.
- **RAB-KD configuration** achieved the best balance between accuracy and efficiency, requiring up to **10× fewer FLOPs** compared to the teacher models.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy
- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Hardware:** GPU-enabled compute node

---

### 🔗 Links

- [Publication](https://ieeexplore.ieee.org/abstract/document/10599908)

---

*Feel free to adapt this approach for your own HAR tasks or other embedded sensing applications.*
