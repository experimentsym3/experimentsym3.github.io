---
layout: page
title: Variational Autoencoder for MNIST Digits
description: Implementation of a Variational Autoencoder (VAE) in TensorFlow, exploring reconstruction quality and generative capabilities on MNIST handwritten digits.
img: assets/img/projects/6_project/cover.jpg
importance: 6
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

During training, the objective is to balance:

- **Reconstruction loss** (how accurately the input is reproduced).
- **KL-divergence loss** (regularization that keeps the latent space close to a standard normal distribution).

This approach enables both accurate reconstruction and smooth sampling of new digit images.

---

### ⚙️ Implementation Highlights

- **Framework:** TensorFlow (Keras API)
- **Encoder:** Dense layers estimating mean and variance
- **Decoder:** Transposed convolutional layers to reconstruct 28×28 images
- **Latent Dimension:** Tuned through experimentation
- **Training:** Adam optimizer, custom loss combining reconstruction and KL divergence

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
   Visual reconstructions, random sampling, and monitoring convergence.

---

### 🧪 Results and Visualizations

**Example Reconstructions:**  
Comparison between original test digits and VAE reconstructions:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S5_test_49-.png" alt="Reconstructions Baseline" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Baseline Model</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S6_test_49-.png" alt="Reconstructions Enhanced" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Enhanced Decoder</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S7_test_49-.png" alt="Reconstructions Best Model" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Reconstructions – Best Performing Model</em></p>
  </div>
</div>

---

**Generated Samples:**  
Random samples from the latent space demonstrate generative capacity:

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

**Training Dynamics:**  
Loss curves showing convergence and the impact of different configurations:

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S5_loss_curves.png" alt="Loss Baseline" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Training Loss – Baseline Model</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S6_loss_curves.png" alt="Loss Enhanced" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Training Loss – Enhanced Decoder</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/6_project/S10_loss_curves.png" alt="Loss Best" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Training Loss – Best Performing Model</em></p>
  </div>
</div>

---

### 📝 Reflections

- **Latent Space Regularization:**  
  KL divergence effectively encouraged continuous and structured representations.
- **Reconstruction Quality:**  
  Outputs were clear and recognizable, though resolution was limited by model complexity.
- **Generative Sampling:**  
  Random samples produced diverse digit-like outputs, confirming the model learned a meaningful latent space.
- **Learning Outcome:**  
  Building this VAE pipeline provided hands-on experience with probabilistic autoencoding.

---

### ⚙️ Technical Stack

- **Language:** Python
- **Libraries:** TensorFlow, Keras, NumPy, Matplotlib
- **Dataset:** MNIST handwritten digits
