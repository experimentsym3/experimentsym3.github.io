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

Deploying Human Activity Recognition (HAR) models on wearables requires balancing recognition accuracy with resource constraints. Large deep networks often perform well but are too heavy for real-time execution on embedded devices. This project combines **knowledge distillation** and **attention mechanisms** to build efficient models that maintain strong performance while reducing computational cost.

---

### 🧭 Approach Overview

The solution integrates two complementary strategies:

1. **Knowledge Distillation**  
   A smaller *student* model learns not only from the labeled data but also by mimicking the outputs of a larger *teacher* model. This transfer of "soft targets" guides the student to generalize better.

2. **Attention Mechanisms**  
   Channel and spatial attention modules help the student focus on informative channels and temporal regions of the input data.

The attention design draws inspiration from the **Convolutional Block Attention Module (CBAM)**, widely used in visual recognition.  
<a href="https://arxiv.org/abs/1807.06521" target="_blank">[View CBAM Paper]</a>

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/cbam_module.png" alt="CBAM Module Architecture" class="img-fluid rounded z-depth-1" style="max-width:800px;">
  <p class="mt-2"><em>CBAM architecture with Channel and Spatial Attention components</em></p>
</div>

---

### 🧮 CBAM Formulations

**Channel Attention:**

\[
M_c(F) = \sigma\bigl(\text{MLP}\bigl(\text{AvgPool}(F)\bigr)\ \oplus\ \text{MLP}\bigl(\text{MaxPool}(F)\bigr)\bigr)
\]

where:
- \(\oplus\) denotes elementwise summation.
- \(\sigma\) is the sigmoid activation.

---

**Spatial Attention:**

\[
M_s(F) = \sigma\Bigl(f^{7 \times 7}\bigl[\text{AvgPool}(F);\ \text{MaxPool}(F)\bigr]\Bigr)
\]

---

**Refinement Process:**

\[
F' = M_c(F)\ \otimes\ F
\]
\[
F'' = M_s(F')\ \otimes\ F'
\]

where \(\otimes\) is elementwise multiplication.

---

### ⚙️ Model Variants & Architecture

The framework compares several configurations:

- **LM:** Baseline lightweight student.
- **LM-Att:** LM enhanced with attention modules.
- **RB-KD:** Response-based distillation (matching outputs).
- **RB-KD-Att:** Distillation combined with attention.
- **RAB-KD:** Response and attention-based distillation (matching predictions and attention maps).

**Datasets:**
- Opportunity
- WISDM
- UCI Sensors

**Sensors:**
- Wrist accelerometer and gyroscope

**Training:**
- Adam optimizer
- Temperature scaling for softened teacher outputs

---

### 🧮 Loss Functions

**Student Prediction Loss (Cross-Entropy):**

\[
L_{\text{stud}} = -\sum_{k} y_k \log(p_k)
\]

---

**Distillation Loss (KL Divergence):**

\[
L_{\text{dist}} = \sum_{k} q_k^{(T)} \log \frac{q_k^{(T)}}{q_k^{(S)}}
\]

where:
- \(q_k^{(T)}\) and \(q_k^{(S)}\) are softened teacher and student probabilities.

---

**Channel Attention Loss:**

\[
L_{CA} = \frac{1}{C}\sum_{c=1}^{C}\bigl(M_c^{(T)} - M_c^{(S)}\bigr)^2
\]

---

**Spatial Attention Loss:**

\[
L_{SA} = \frac{1}{H \times W}\sum_{i=1}^{H}\sum_{j=1}^{W}\bigl(M_{s,ij}^{(T)} - M_{s,ij}^{(S)}\bigr)^2
\]

---

**Total Attention Loss:**

\[
L_{\text{Att}} = L_{CA} + L_{SA}
\]

---

**Overall Objective Function:**

\[
L = \alpha \cdot L_{\text{stud}} + (1-\alpha)\cdot L_{\text{dist}} + \beta \cdot L_{\text{Att}}
\]

---

### 🛠️ Experimental Setup

**Evaluation Metrics:**
- F1-Score
- Accuracy
- Model size (parameters)
- FLOPs

Each model was evaluated for both recognition performance and computational efficiency.

---

### 📊 Model Size Comparisons

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_opp2.png" alt="Model Sizes - Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Opportunity dataset</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_wisdm2.png" alt="Model Sizes - WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>WISDM dataset</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/modelsizes_sensors2.png" alt="Model Sizes - UCI Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>UCI Sensors dataset</em></p>
  </div>
</div>

---

### 🟢 Recognition Performance

**Opportunity Dataset:**
<img src="/assets/img/projects/9_project/opportunity_attdist_results.png" alt="Opportunity Results" class="img-fluid rounded z-depth-1">

**WISDM Dataset:**
<img src="/assets/img/projects/9_project/wisdm_attdist_results.png" alt="WISDM Results" class="img-fluid rounded z-depth-1">

**UCI Sensors Dataset:**
<img src="/assets/img/projects/9_project/sensors_attdist_results.png" alt="Sensors Results" class="img-fluid rounded z-depth-1">

---

### 🔵 Resource Consumption

Despite higher accuracy, the advanced configurations remained lightweight:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att_resource.png" alt="Resource Use - Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Opportunity</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att2_resource.png" alt="Resource Use - WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>WISDM</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att3_resource.png" alt="Resource Use - UCI Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>UCI Sensors</em></p>
  </div>
</div>

---

### 🟣 Accuracy vs. Compute Trade-Off

These plots illustrate how RAB-KD achieved strong accuracy while reducing FLOPs by an order of magnitude:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att_rec.png" alt="F1-Score vs FLOPs - Opportunity" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Opportunity</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att2_rec.png" alt="F1-Score vs FLOPs - WISDM" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>WISDM</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/9_project/dist_att3_rec.png" alt="F1-Score vs FLOPs - UCI Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>UCI Sensors</em></p>
  </div>
</div>

---

### 📝 Key Insights

- Distillation improved F1-score by 4–6% over baseline training.
- Attention modules further enhanced discrimination.
- RAB-KD delivered the best accuracy-compute trade-off.
- Computational cost reduced up to 10× compared to teacher models.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy
- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Hardware:** GPU-enabled compute node

---

### 🔗 Links

- [Publication](https://ieeexplore.ieee.org/abstract/document/10599908)