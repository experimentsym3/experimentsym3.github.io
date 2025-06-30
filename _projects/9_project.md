---
layout: page
title: Attention-Based Knowledge Distillation for Efficient HAR
description: Lightweight human activity recognition (HAR) combining knowledge distillation and attention modules to improve performance on wearable sensor data
img: assets/img/projects/9_project/modelsizes_wisdm2.png
importance: 9
category: Wearable Sensing & Human Activity Recognition
related_publications: false
---

### ✨ Motivation

Deploying Human Activity Recognition (HAR) models on wearables requires balancing accuracy and efficiency. While large deep networks can achieve high performance, they are impractical for resource-constrained devices. This project explores how combining **knowledge distillation** and **attention mechanisms** can train compact models that retain competitive recognition accuracy with dramatically reduced computation and model size.

---

### 🧭 Approach Overview

The work compares several configurations:

- **LM (Lightweight Model):** A compact student network trained from scratch.
- **RB-KD (Response-Based Knowledge Distillation):** The student trained to match the softened predictions of a larger teacher model.
- **LM-Att:** Adding channel and spatial attention to the lightweight model.
- **RB-KD-Att:** RB-KD with attention modules in the student.
- **RAB-KD (Response and Attention-Based KD):** The most advanced variant, where the student mimics both predictions and attention maps from the teacher.

---

### 🛠️ Model Architectures

Below are the key architectures evaluated in the study:

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/distillation_architecture2.png" alt="Response-Based Knowledge Distillation" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Figure 1. Response-based knowledge distillation architecture (RB-KD).</em></p>
</div>

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/attention_architecture.png" alt="Attention Module Architecture" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Figure 2. Lightweight model with CBAM channel and spatial attention modules (LM-Att).</em></p>
</div>

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/attdistillation_architecture2.png" alt="Response and Attention-Based Knowledge Distillation" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Figure 3. Response and Attention-Based Knowledge Distillation (RAB-KD) combining prediction and attention supervision.</em></p>
</div>

---

### 🧮 Loss Formulations

The training objective combines multiple components:

**Student Prediction Loss (Cross-Entropy):**

$$
L_{\\text{stud}} = - \\sum_{k} y_k \\log(p_k)
$$

**Distillation Loss (KL Divergence):**

$$
L_{\\text{dist}} = \\sum_{k} q_k^{(T)} \\log \\frac{q_k^{(T)}}{q_k^{(S)}}
$$

**Channel Attention Loss:**

$$
L_{CA} = \\frac{1}{C} \\sum_{c=1}^C \\bigl(M_c^{(T)} - M_c^{(S)}\\bigr)^2
$$

**Spatial Attention Loss:**

$$
L_{SA} = \\frac{1}{H \\times W} \\sum_{i=1}^H \\sum_{j=1}^W \\bigl(M_{s,ij}^{(T)} - M_{s,ij}^{(S)}\\bigr)^2
$$

**Total Attention Loss:**

$$
L_{\\text{Att}} = L_{CA} + L_{SA}
$$

**Overall Objective:**

$$
L = \\alpha \\cdot L_{\\text{stud}} + (1-\\alpha) \\cdot L_{\\text{dist}} + \\beta \\cdot L_{\\text{Att}}
$$

---

### 📘 CBAM Attention Mechanism

The channel and spatial attention modules were adapted from the **Convolutional Block Attention Module (CBAM)**:

**Channel Attention:**

$$
M_c(F) = \\sigma\\bigl(\\text{MLP}(\\text{AvgPool}(F)) \\oplus \\text{MLP}(\\text{MaxPool}(F))\\bigr)
$$

**Spatial Attention:**

$$
M_s(F) = \\sigma\\Bigl(f^{7 \\times 7}\\bigl[\\text{AvgPool}(F);\\ \\text{MaxPool}(F)\\bigr]\\Bigr)
$$

**Feature Refinement:**

$$
F' = M_c(F) \\otimes F
$$

$$
F'' = M_s(F') \\otimes F'
$$

where \\(\\oplus\\) denotes elementwise summation and \\(\\otimes\\) elementwise multiplication.

<a href="https://arxiv.org/abs/1807.06521" target="_blank">[View CBAM Paper]</a>

---

### 🛠️ Experimental Setup

- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Sensors:** Wrist accelerometer and gyroscope
- **Metrics:** F1-Score, Accuracy, FLOPs, Model size
- **Training:** Adam optimizer with temperature scaling for softened outputs

---

### 📊 Evaluation Results

Below are performance comparisons and resource usage across configurations and datasets.

---

**Model Size per Dataset:**

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_opp2.png" alt="Model Sizes - Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Figure 4. Model size and compute for Opportunity dataset.</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_wisdm2.png" alt="Model Sizes - WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Figure 5. Model size and compute for WISDM dataset.</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_sensors2.png" alt="Model Sizes - Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Figure 6. Model size and compute for UCI Sensors dataset.</em></p>
  </div>
</div>

---

**Recognition Performance Comparison:**

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/opportunity_attdist_results.png" alt="Opportunity Results" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 7. Opportunity dataset recognition results.</em></p>
</div>

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/wisdm_attdist_results.png" alt="WISDM Results" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 8. WISDM dataset recognition results.</em></p>
</div>

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/sensors_attdist_results.png" alt="Sensors Results" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 9. UCI Sensors dataset recognition results.</em></p>
</div>

---

**Bubble Plot: Accuracy vs. Compute Trade-off:**

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/dist_att_rec.png" alt="Opportunity Bubble Chart" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 10. Accuracy vs. FLOPs – Opportunity dataset.</em></p>
</div>

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/dist_att2_rec.png" alt="WISDM Bubble Chart" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 11. Accuracy vs. FLOPs – WISDM dataset.</em></p>
</div>

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/dist_att3_rec.png" alt="Sensors Bubble Chart" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 12. Accuracy vs. FLOPs – UCI Sensors dataset.</em></p>
</div>

---

**Resource Consumption:**

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/dist_att_resource.png" alt="Opportunity Resource Usage" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 13. FLOPs and parameter changes – Opportunity dataset.</em></p>
</div>

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/dist_att2_resource.png" alt="WISDM Resource Usage" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 14. FLOPs and parameter changes – WISDM dataset.</em></p>
</div>

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/dist_att3_resource.png" alt="Sensors Resource Usage" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 15. FLOPs and parameter changes – UCI Sensors dataset.</em></p>
</div>

---

### 📝 Key Takeaways

- **Distillation improves accuracy:** RB-KD alone yielded measurable gains over training from scratch.
- **Attention modules further enhance performance:** LM-Att consistently improved F1-Score, especially on Opportunity and WISDM datasets.
- **RAB-KD offers the best trade-off:** Matching both predictions and attention maps preserved accuracy while reducing FLOPs by up to 10×.
- This strategy makes **on-device HAR feasible for real-world applications.**

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy
- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Hardware:** GPU-enabled compute node

---

### 🔗 Links

- [Publication](https://ieeexplore.ieee.org/abstract/document/10599908)
