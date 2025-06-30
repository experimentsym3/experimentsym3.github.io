---
layout: page
title: Attention-Based Knowledge Distillation for Efficient HAR
description: Lightweight human activity recognition (HAR) combining knowledge distillation and attention modules to improve performance on wearable sensor data
img: assets/img/projects/9_project/Fig9_Resource_Consumption.png
importance: 9
category: Wearable Sensing & Human Activity Recognition
related_publications: false
---

### ✨ Motivation

Deploying Human Activity Recognition (HAR) models on wearables requires balancing accuracy and efficiency. Large deep networks often achieve excellent performance but are unsuitable for real-time execution on low-power devices. This project explores combining **knowledge distillation** and **attention mechanisms** to create smaller models that retain competitive recognition accuracy while reducing computational cost.

---

### 🧭 Approach Overview

The proposed framework integrates:

- **Response-Based Knowledge Distillation (RB-KD):** The student model learns to approximate the softened outputs of a larger teacher model.
- **Attention Modules:** Channel and spatial attention modules guide the student to focus on the most relevant channels and time steps.
- **Response and Attention-Based Knowledge Distillation (RAB-KD):** A more advanced variant combining distillation of predictions and alignment of attention maps.

---

### 🛠️ System Architectures

Below are the architectures used in the study:

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig1_ResponseKD.png" alt="Response-Based Knowledge Distillation" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Figure 1: Response-based knowledge distillation architecture</em></p>
</div>

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig2_CBAM.png" alt="CBAM Attention Module" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Figure 2: CBAM module with channel and spatial attention components</em></p>
</div>

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig3_RABKD.png" alt="Response and Attention-Based Knowledge Distillation" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Figure 3: RAB-KD combining prediction and attention distillation</em></p>
</div>

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig4_RBKD_Attention.png" alt="Response KD with Student Attention" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Figure 4: Response-based KD with attention applied to the student model</em></p>
</div>

---

### 🧮 Loss Formulations

**Student Prediction Loss (Cross-Entropy):**

$$
L_{\text{stud}} = -\sum_{k} y_k \log(p_k)
$$

---

**Distillation Loss (KL Divergence):**

$$
L_{\text{dist}} = \sum_{k} q_k^{(T)} \log \frac{q_k^{(T)}}{q_k^{(S)}}
$$

where:
- \(q_k^{(T)}\): Teacher probabilities (softened)
- \(q_k^{(S)}\): Student probabilities (softened)

---

**Channel Attention Loss:**

$$
L_{CA} = \frac{1}{C}\sum_{c=1}^C \bigl(M_c^{(T)} - M_c^{(S)}\bigr)^2
$$

---

**Spatial Attention Loss:**

$$
L_{SA} = \frac{1}{H \times W}\sum_{i=1}^H \sum_{j=1}^W \bigl(M_{s,ij}^{(T)} - M_{s,ij}^{(S)}\bigr)^2
$$

---

**Total Attention Loss:**

$$
L_{\text{Att}} = L_{CA} + L_{SA}
$$

---

**Overall Objective:**

$$
L = \alpha \cdot L_{\text{stud}} + (1-\alpha)\cdot L_{\text{dist}} + \beta \cdot L_{\text{Att}}
$$

---

### 📘 CBAM Attention Mechanism

The Channel and Spatial Attention components were adapted from the **Convolutional Block Attention Module (CBAM)**:

**Channel Attention:**

$$
M_c(F) = \sigma\bigl(\text{MLP}(\text{AvgPool}(F)) \oplus \text{MLP}(\text{MaxPool}(F))\bigr)
$$

---

**Spatial Attention:**

$$
M_s(F) = \sigma\Bigl(f^{7 \times 7}\bigl[\text{AvgPool}(F);\ \text{MaxPool}(F)\bigr]\Bigr)
$$

---

**Refinement:**

$$
F' = M_c(F)\otimes F
$$

$$
F'' = M_s(F')\otimes F'
$$

where \(\oplus\) denotes elementwise summation and \(\otimes\) elementwise multiplication.

<a href="https://arxiv.org/abs/1807.06521" target="_blank">[View CBAM Paper]</a>

---

### 🛠️ Experimental Setup

- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Sensors:** Wrist accelerometer and gyroscope
- **Models:** LM, LM-Att, RB-KD, RB-KD-Att, RAB-KD
- **Metrics:** F1-Score, Accuracy, FLOPs, Model size
- **Training:** Adam optimizer, temperature scaling

---

### 📊 Evaluation Results

Below are results reported in the study.

---

**Performance Comparison:**

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig5_Performance.png" alt="Performance Comparison" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 5: Recognition performance comparison across configurations</em></p>
</div>

---

**F1-Score per Dataset:**

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig6_F1Score.png" alt="F1-Score Results" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 6: F1-Score across datasets</em></p>
</div>

---

**Bubble Plot: Accuracy vs. Compute:**

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig7_Bubble.png" alt="Bubble Plot" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 7: Accuracy vs. FLOPs trade-off</em></p>
</div>

---

**Resource Consumption:**

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/Fig9_Resource_Consumption.png" alt="Resource Consumption" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>Figure 9: FLOPs and parameter counts per configuration</em></p>
</div>

---

### 📝 Key Insights

- Distillation consistently improved accuracy over training from scratch.
- Attention modules enhanced recognition by focusing on salient regions.
- RAB-KD achieved the best trade-off, reducing FLOPs by up to 10× while maintaining strong performance.
- These techniques enable efficient HAR on embedded platforms.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy
- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Hardware:** GPU-enabled compute node

---

### 🔗 Links

- [Publication](https://ieeexplore.ieee.org/abstract/document/10599908)
