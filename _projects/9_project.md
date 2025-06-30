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

Deploying Human Activity Recognition (HAR) models on wearables requires balancing accuracy and efficiency. Large deep networks often achieve high recognition performance but are impractical for real-time use on embedded devices. This project combines **knowledge distillation** with **attention mechanisms** to create compact models that retain competitive accuracy while reducing computational demands.

---

### 🧭 Approach Overview

The approach integrates two ideas:

1. **Knowledge Distillation**
   A smaller *student* model learns not only from ground truth labels but also by mimicking the outputs of a larger *teacher* model. This transfer of "soft targets" enriches the student's learning signal and improves generalization.

2. **Attention Mechanisms**
   To help the student model focus on the most informative parts of the sensor data, attention modules were added. Specifically:
   - **Channel Attention (CA):** Identifies which sensor channels (axes) contribute most.
   - **Spatial Attention (SA):** Highlights time regions containing important patterns.

The attention design was inspired by the **Convolutional Block Attention Module (CBAM)**, a widely used technique in computer vision. <a href="https://arxiv.org/abs/1807.06521" target="_blank">[View CBAM Paper]</a>

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/cbam_module.png" alt="CBAM Module Architecture" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Architecture of CBAM module with architecture of CA and SA modules individually</em></p>
</div>

---

### 🧮 CBAM Formulations

**Channel Attention:**

The channel attention module applies both average and max pooling, followed by a shared MLP:

$$
M_c(\mathbf{F}) = \sigma \big( \text{MLP}(\text{AvgPool}(\mathbf{F})) + \text{MLP}(\text{MaxPool}(\mathbf{F})) \big)
$$

where:
- $$\sigma$$ is the sigmoid activation,
- MLP denotes a shared multi-layer perceptron.

---

**Spatial Attention:**

Spatial attention concatenates pooled features across channels and applies convolution:

$$
M_s(\mathbf{F}) = \sigma \big( f^{7 \times 7} \big( [\text{AvgPool}(\mathbf{F}); \text{MaxPool}(\mathbf{F})] \big) \big)
$$

where:
- $$f^{7 \times 7}$$ is a convolution with a $$7 \times 7$$ kernel.

---

**Refinement Process:**

The attention maps sequentially refine the input:

$$
\mathbf{F}' = M_c(\mathbf{F}) \otimes \mathbf{F}
$$

$$
\mathbf{F}'' = M_s(\mathbf{F}') \otimes \mathbf{F}'
$$

where $$\otimes$$ denotes element-wise multiplication.

---

### ⚙️ Model Architecture & Variants

Several configurations were compared:

- **LM:** Baseline lightweight student.
- **LM-Att:** LM enhanced with attention modules.
- **RB-KD:** Response-based distillation (matching outputs).
- **RB-KD-Att:** Distillation combined with attention.
- **RAB-KD:** Response and attention-based distillation (matching predictions and attention maps).

**Loss Function:**
- Cross-entropy with ground truth
- KL divergence between student and teacher outputs
- Attention alignment loss

**Training:**
- Adam optimizer
- Temperature scaling applied to soften logits
- Datasets: Opportunity, WISDM, UCI Sensors

---

### 🛠️ Experimental Setup

**Datasets:**
- **Opportunity:** Multimodal activity dataset
- **WISDM:** Smartphone and smartwatch activity data
- **UCI Sensors:** Wearable sensor dataset for daily living activities

**Sensors:**
- Accelerometer and gyroscope

**Evaluation Metrics:**
- F1-Score
- Accuracy
- Model size
- FLOPs

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

Despite higher accuracy, advanced configurations remained lightweight:

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

These plots illustrate how RAB-KD delivered strong accuracy while reducing FLOPs by an order of magnitude:

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

- Distillation improved accuracy by 4–6% over conventional training.
- Attention modules enhanced feature discrimination, particularly on WISDM.
- RAB-KD consistently achieved the best performance-to-efficiency trade-off.
- The approach reduced computational cost by up to 10× compared to teacher models.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy
- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Hardware:** GPU-enabled compute node

---

### 🔗 Links

- [Publication](https://ieeexplore.ieee.org/abstract/document/10599908)