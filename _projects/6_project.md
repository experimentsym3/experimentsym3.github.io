---
layout: page
title: Variational Autoencoder for MNIST Digits
description: Implementation of a Variational Autoencoder combining an LSTM encoder and CNN decoder to generate handwritten digits, exploring architecture variations and training dynamics.
img: assets/img/projects/6_project/cover.jpg
importance: 6
category: work
related_publications: false
---

### ✨ Motivation

This project explores how a **Variational Autoencoder (VAE)** can learn structured latent representations of handwritten digits. Unlike standard autoencoders, VAEs explicitly model distributions and allow sampling new instances from the latent space. To investigate this, I implemented an architecture combining an **LSTM encoder** (to process images as sequences) and a **CNN decoder** (to reconstruct images), training and refining it from scratch on the MNIST dataset.

---

### 🔗 Links

- [Project on GitHub](https://github.com/sumeyye-agac/variational-autoencoder-MNIST-tensorflow)

---

### ⚙️ Implementation Highlights

- **Encoder:** Single-layer LSTM treating each 28×28 image as a sequence of 28 time steps (rows), with 64 hidden units to produce latent vectors.
- **Latent Variables:** Computed mean, variance, and epsilon for reparameterization, sampling latent variable z from a Gaussian distribution.
- **Decoder:** Multiple configurations of transposed convolutional layers, dense layers, and optional dropout to reconstruct 28×28 outputs.
- **Loss Function:** Binary cross-entropy for reconstruction and KL divergence to regularize latent space.
- **Training:** 50 epochs with Adam optimizer (learning rates experimented between 0.0005 and 0.001).

---

### 🛠️ Workflow

1. **Data Preparation:**  
   MNIST digits normalized to [0,1].
2. **Model Construction:**  
   Custom encoder and decoder modules.
3. **Training:**  
   Mini-batch gradient descent over 50 epochs.
4. **Evaluation:**  
   - Reconstruction of training examples  
   - Generation of random samples  
   - Analysis of convergence through loss curves

---

### 🧪 Results and Visualizations

This project involved **seven major configurations**, each progressively improving the model’s generative performance.

---

#### 🔹 Baseline Configuration

**Description:**  
The initial decoder included 3 transposed convolution layers and no dropout. Learning rate was set to 0.0005.

**Observations:**  
- Reconstruction loss decreased steadily and stabilized by epoch 20.  
- KL divergence increased as latent space regularized.  
- Reconstructions were clear and recognizable.  
- Generated samples were often blank or indistinct, indicating limited diversity.

**Visualizations:**

<div class="row mt-3">
  <div class="col-sm-6">
    <img src="/assets/img/projects/6_project/S5_test_49-.png" alt="Reconstructions Baseline" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Baseline Model</em></p>
  </div>
  <div class="col-sm-6">
    <img src="/assets/img/projects/6_project/S5_loss_curves.png" alt="Loss Baseline" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Training Loss – Baseline Model</em></p>
  </div>
</div>

---

#### 🔹 Deeper Decoder with Additional Layers

**Description:**  
Added extra transposed convolution and dense layers to increase capacity.

**Observations:**  
- Slight improvement in reconstruction sharpness.  
- Generated digits still lacked variety.  
- KL divergence slightly higher, indicating stronger regularization.

**Visualizations:**

<div class="row mt-3">
  <div class="col-sm-6">
    <img src="/assets/img/projects/6_project/S6_test_49-.png" alt="Reconstructions Enhanced" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Deeper Decoder</em></p>
  </div>
  <div class="col-sm-6">
    <img src="/assets/img/projects/6_project/S6_loss_curves.png" alt="Loss Enhanced" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Training Loss – Deeper Decoder</em></p>
  </div>
</div>

---

#### 🔹 Experimenting with Dropout

**Description:**  
Introduced dropout layers to encourage variability and prevent overfitting.

**Observations:**  
- Training loss curves became less stable.  
- Generated samples deteriorated, often showing partial or noisy digits.  
- Confirmed that high dropout alone was insufficient for better sampling.

---

#### 🔹 Optimized Configuration (Best Performing)

**Description:**  
Reduced dense layer sizes in the decoder, increased channel counts, and increased learning rate to 0.001.

**Observations:**  
- Clear reconstructions with consistent digit contours.  
- Generated samples were diverse: digits 0, 2, 4, 6, 7, 8, and 9 appeared frequently.  
- Faster convergence without sacrificing output quality.

**Visualizations:**

<div class="row mt-3">
  <div class="col-sm-6">
    <img src="/assets/img/projects/6_project/S7_test_49-.png" alt="Reconstructions Best" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Optimized Model</em></p>
  </div>
  <div class="col-sm-6">
    <img src="/assets/img/projects/6_project/S10_loss_curves.png" alt="Loss Best" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Training Loss – Optimized Model</em></p>
  </div>
</div>

---

#### 🔹 Generated Samples Across Configurations

Sampling from the latent space showed how the models progressed:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S8_test_49-.png" alt="Generated Early" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Generated Samples – Early Model</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S8_test_99-.png" alt="Generated Refined" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Generated Samples – Refined Settings</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/generated_images.png" alt="Generated Random" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Generated Samples – Random Latent Vectors</em></p>
  </div>
</div>

---

### 📝 Reflections

- **Model Design:**  
  Combining an LSTM encoder and CNN decoder provided a unique perspective on representing spatial sequences in latent space.
- **Training Dynamics:**  
  Learning rate adjustments had a significant impact on convergence speed and output quality.
- **Regularization:**  
  KL divergence was essential for maintaining a smooth latent space, but excessive dropout degraded output consistency.
- **Generative Quality:**  
  The final configuration achieved diverse and recognizable digits without overfitting training data.
- **Learning Outcome:**  
  This project deepened my understanding of probabilistic generative models and their sensitivity to architecture design.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy, Matplotlib
- **Dataset:** MNIST handwritten digits