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

Deploying Human Activity Recognition (HAR) models on wearables requires a balance: the models must be accurate enough to detect subtle motion patterns but small and efficient enough to run on low-power devices.  

While large convolutional and recurrent networks can achieve high accuracy, their resource requirements make them impractical for real-time use. This project explores how **knowledge distillation** and **attention mechanisms** can be combined to create compact models that still deliver competitive performance.  

---

### 🧭 Approach Overview

The solution integrates two core ideas:

1. **Knowledge Distillation**  
   A smaller *student model* learns not just from the labeled data but also by mimicking the outputs of a larger *teacher model*. The teacher's predictions contain richer information about class relationships (softer targets), helping the student generalize better.

2. **Attention Mechanisms**  
   Two types of attention modules are used:
   - **Channel Attention (CA):** Learns which sensor channels (e.g., accelerometer vs. gyroscope) are most relevant for each activity.
   - **Spatial Attention (SA):** Learns which time steps contain the most discriminative patterns.

Combining these techniques allows the student model to focus on important aspects of the data while distilling knowledge from a more powerful network.

---

<div class="text-center my-4">
  <img src="/assets/img/projects/9_project/distillation_attention_architecture2.png" alt="Distillation + Attention Architecture" class="img-fluid rounded z-depth-1" style="max-width:700px;">
  <p class="mt-2"><em>Architecture overview combining knowledge distillation and attention modules</em></p>
</div>

---

### ⚙️ Model Architecture & Variants

The experiments compared several configurations:

- **LM:** A lightweight student model trained with conventional supervision.
- **LM-Att:** The same student enhanced with attention modules.
- **RB-KD:** Student model with response-based distillation (matching teacher outputs).
- **RB-KD-Att:** Distillation combined with attention.
- **RAB-KD:** The most advanced variant, combining response-based distillation and attention matching.

**Distillation Loss:**  
The loss function blended:
- Cross-entropy with the ground-truth labels.
- KL divergence between teacher and student predictions.
- An attention loss aligning the student's attention maps with those of the teacher.

**Training Details:**
- Optimizer: Adam
- Temperature scaling applied to soften the teacher logits.
- Datasets: Opportunity, WISDM, and UCI Sensors.
- Sensors: Wrist accelerometer and gyroscope channels.

---

### 🛠️ Experimental Setup

**Datasets:**
- **Opportunity:** Rich set of activities with multiple modalities.
- **WISDM:** Smartphone and smartwatch motion data for common activities.
- **UCI Sensors:** Daily living activities with wrist-worn sensors.

**Evaluation Metrics:**
- F1-Score (main metric)
- Accuracy
- Model size (parameters)
- FLOPs (compute cost)

Each model was evaluated both on recognition accuracy and computational efficiency to measure practical deployability.

---

### 📊 Model Size Comparisons

The charts below show how the different configurations scaled in terms of parameter count across datasets.

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
    <img src="/assets/img/projects/9_project/modelsizes_sensors2.png" alt="Model Sizes - Sensors" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>UCI Sensors dataset</em></p>
  </div>
</div>

These results highlight that adding attention modules and distillation moderately increased parameter counts while staying far below the teacher model size.

---

### 🟢 Recognition Performance

Performance improved consistently as attention and distillation were layered in.

**Opportunity Dataset:**
<img src="/assets/img/projects/9_project/opportunity_attdist_results.png" alt="Opportunity Results" class="img-fluid rounded z-depth-1">

**WISDM Dataset:**
<img src="/assets/img/projects/9_project/wisdm_attdist_results.png" alt="WISDM Results" class="img-fluid rounded z-depth-1">

**UCI Sensors Dataset:**
<img src="/assets/img/projects/9_project/sensors_attdist_results.png" alt="Sensors Results" class="img-fluid rounded z-depth-1">

In most cases, RAB-KD outperformed simpler configurations, demonstrating that attention distillation provides a richer supervisory signal than matching predictions alone.

---

### 🔵 Resource Consumption

Despite higher accuracy, the advanced configurations remained lightweight.

**Opportunity:**
<img src="/assets/img/projects/9_project/dist_att_resource.png" alt="Resource Use - Opportunity" class="img-fluid rounded z-depth-1">

**WISDM:**
<img src="/assets/img/projects/9_project/dist_att2_resource.png" alt="Resource Use - WISDM" class="img-fluid rounded z-depth-1">

**UCI Sensors:**
<img src="/assets/img/projects/9_project/dist_att3_resource.png" alt="Resource Use - Sensors" class="img-fluid rounded z-depth-1">

---

### 🟣 Accuracy vs. Compute Trade-Off

Bubble plots show how the most advanced configurations delivered high F1-scores while requiring substantially fewer FLOPs compared to the teacher models.

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

These trade-off curves illustrate that RAB-KD achieved a sweet spot of performance and efficiency.

---

### 📝 Key Insights

- **Distillation alone** consistently boosted recognition accuracy by 4–6% compared to the baseline student.
- **Attention modules** further improved discriminative power, particularly on WISDM.
- **RAB-KD** proved the most effective, combining rich teacher supervision with focus on salient features.
- Overall, these models reduced computational cost up to 10× compared to teacher architectures, making them viable for embedded deployment.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy
- **Datasets:** Opportunity, WISDM, UCI Sensors
- **Hardware:** GPU-enabled compute node

---

### 🔗 Links

- [Publication](https://ieeexplore.ieee.org/abstract/document/10599908)

