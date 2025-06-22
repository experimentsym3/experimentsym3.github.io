---
layout: page
title: How Does a CNN Learn?
description: A systematic exploration of CNN parameters on the CIFAR-10 dataset using TensorFlow
img: assets/img/projects/2_project/26May_K33_fc1_test_tsne_100.png
importance: 1
category: work
related_publications: false
---

### 🎯 Motivation

This project investigates how convolutional neural networks learn—specifically, how different architectural and training choices affect model performance. Rather than aiming for state-of-the-art accuracy, the goal was to deeply understand the impact of each parameter: activation function, filter size, number of channels, fully connected layers, pooling, kernel initialization, augmentation, batch normalization, dropout, batch size, and optimizer. All experiments were conducted on the CIFAR-10 image classification dataset using a self-implemented CNN with only three convolutional layers in TensorFlow.

---

### 📎 Links  
- 🔗 [GitHub Repository](https://github.com/sumeyye-agac/object-classification-CIFAR10-tensorflow)

---

### 🧠 Architecture Overview

The CNN was designed with three convolutional layers followed by a dense layer. The best-performing configuration included:
- Filter size: 3x3  
- Feature maps: 32-64-128  
- Fully connected layer: 512 units  
- Max pooling, ReLU, He initialization  
- Batch normalization (before activation), no dropout  
- Data augmentation and input normalization  
- Optimizer: Adam, batch size: 32  

This setup achieved over **83% test accuracy**, showing effective generalization and fast convergence with minimal overfitting.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/2_project/16May_E3_accuracy_loss_curve.png" title="Training & Test Accuracy / Loss" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 📊 Parameter Impact

We experimented with individual hyperparameters to understand their roles in performance.

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/batchnorm.png" title="Effect of Batch Normalization" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/batchsize32.png" title="Batch Size Comparison" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 🧬 Learning Visualization

We used t-SNE to visualize the evolution of internal representations. Over epochs, the feature space gradually separates class clusters.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/2_project/26May_K33_fc1_test_tsne_100.png" title="t-SNE of final feature representations (Epoch 100)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 📈 Optimizer Performance

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/opt-train.png" title="Training Accuracy per Optimizer" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/opt-val.png" title="Validation Accuracy per Optimizer" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### ⚙️ Technical Stack
- **Framework**: TensorFlow 
- **Dataset**: CIFAR-10  
- **Architecture**: 3-layer CNN  
- **Visualization**: t-SNE, Matplotlib  
- **Training**: Manual tuning, early stopping, augmentation
