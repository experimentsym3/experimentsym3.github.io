---
layout: page
title: Variational Autoencoder for MNIST Digits
description: Implementation of a Variational Autoencoder (VAE) in TensorFlow, exploring reconstruction quality and generative capabilities on MNIST handwritten digits.
img: assets/img/projects/6_project/cover.jpg
importance: 5
category: work
related_publications: false
---

### 🎯 Motivation

This project demonstrates how a **Variational Autoencoder (VAE)** can learn a compressed probabilistic representation of high-dimensional data. Unlike standard autoencoders, VAEs introduce a structured latent space by modeling distributions, enabling generative sampling of new data instances. The goal was to implement a VAE from scratch on the MNIST dataset and analyze reconstruction fidelity and latent space interpolation.

---

### 📎 Links

- 🔗 [Project on GitHub](https://github.com/sumeyye-agac/variational-autoencoder-MNIST-tensorflow)

---

### 🧠 Method Overview

Variational Autoencoders combine two key components:

- An **encoder network** that maps input data to latent variables parameterized as Gaussian distributions (means and variances).
- A **decoder network** that reconstructs images from latent samples.

During training, the objective is to minimize the evidence lower bound (ELBO), balancing:

- **Reconstruction loss** (accuracy of output relative to input)
- **KL-divergence loss** (regularization encouraging latent distributions to match a prior)

This ensures smooth latent space structure and supports generative sampling.

---

### ⚙️ Implementation Highlights

- **Framework:** TensorFlow (Keras API)
- **Encoder Architecture:** Two dense layers outputting mean and log variance
- **Decoder Architecture:** Two dense layers reconstructing 28×28 images
- **Latent Dimension:** Tunable (multiple experiments with different sizes)
- **Training:** Adam optimizer with custom combined loss

---

### 🛠️ Workflow

The process included:

1. **Data Preprocessing:**  
   MNIST digits normalized to [0,1].
2. **Model Construction:**  
   Custom encoder and decoder modules.
3. **Training:**  
   50 epochs with mini-batch updates.
4. **Evaluation:**  
   Visual reconstructions, random sampling, and convergence monitoring.

---

### 🧪 Results and Visualizations

**Example Reconstructions:**  
Comparison between original test digits and VAE reconstructions:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S5_test_49-.png" alt="Reconstructions S5" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Setup S5</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S6_test_49-.png" alt="Reconstructions S6" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Setup S6</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S7_test_49-.png" alt="Reconstructions S7" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Setup S7</em></p>
  </div>
</div>

---

**Generated Samples:**  
Sampling from the latent space shows the model’s generative capacity:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S8_test_49-.png" alt="Generated S8" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Generated Samples (49)</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S8_test_99-.png" alt="Generated S8 - 99" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Generated Samples (99)</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/generated_images.png" alt="Generated Random Samples" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Random Latent Samples</em></p>
  </div>
</div>

---

**Training Dynamics:**  
Loss curves showing convergence and decomposition of loss terms:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S5_loss_curves.png" alt="Loss S5" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Loss Curves – Setup S5</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S6_loss_curves.png" alt="Loss S6" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Loss Curves – Setup S6</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S10_loss_curves.png" alt="Loss S10" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Loss Curves – Setup S10</em></p>
  </div>
</div>

---

### 📝 Reflections

- **Latent Space Regularization:**  
  KL divergence effectively encouraged continuous and structured latent representations.
- **Reconstruction Quality:**  
  Outputs were clear and recognizable, though resolution was limited by model capacity.
- **Generative Sampling:**  
  Random samples demonstrated diverse digit forms, validating learned distributions.
- **Learning Outcome:**  
  Implementing this pipeline end-to-end provided deep intuition about probabilistic autoencoding.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy, Matplotlib
- **Dataset:** MNIST (60,000 training, 10,000 test digits)

---
