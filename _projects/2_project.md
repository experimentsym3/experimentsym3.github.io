---
layout: page
title: How Does a CNN Learn?
description: A systematic exploration of CNN parameters on the CIFAR-10 dataset using TensorFlow
img: assets/img/projects/2_project/cover.jpg
importance: 2
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

The CNN was designed with three convolutional layers followed by a single dense layer. After experimentation, the final configuration used:
- Filter size: 3x3  
- Feature maps: 32-64-128  
- Dense layer: 512 units  
- Max pooling, ReLU activation, He initialization  
- Batch normalization (before activation), no dropout  
- Data augmentation and input normalization  
- Optimizer: Adam, batch size: 32, early stopping after 90–105 epochs  
This final setup achieved over **83% test accuracy**, demonstrating strong generalization without overfitting.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/projects/2_project/baseline_convergence.png" title="Baseline Model: Accuracy & Loss Curves" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 📊 Results & Experiments

This project systematically explored each parameter's effect. Highlights include:

| Parameter          | Best Setting       | Notes                                         |
|-------------------|--------------------|-----------------------------------------------|
| Activation         | ReLU               | Outperformed sigmoid and tanh                 |
| Filter Size        | 3x3                | Balanced accuracy and training time           |
| Feature Maps       | 32-64-128          | More channels improved performance            |
| Dense Layer        | 512 units          | 1-layer better than deeper setups             |
| Pooling            | Max Pooling        | Lower overfitting than average pooling        |
| Initialization     | He                 | Slightly better and more consistent with ReLU |
| Augmentation       | Setting 3 (S3)     | Improved test performance & stability         |
| Dropout            | Not used           | Slowed convergence, no added benefit          |
| Batch Norm         | Used, before ReLU  | Boosted performance when used alone           |
| Batch Size         | 32                 | Good trade-off between accuracy and compute   |
| Optimizer          | Adam               | Outperformed RMSprop, SGD, Adagrad, etc.      |

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/activation_comparison.png" title="Activation Functions" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/filter_size_comparison.png" title="Filter Size" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/feature_maps_comparison.png" title="Feature Maps" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 🧬 Visualizing Learning

To observe how feature representations evolve during training, t-SNE plots were generated from the latent space. After 100 epochs, clear clusters emerged in the final dense layer's output, particularly for well-learned classes like truck, frog, ship, and horse. This confirmed that the model learned discriminative representations across time.

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/tsne_fc1_epoch1.png" title="t-SNE at Epoch 1" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/tsne_fc1_epoch50.png" title="t-SNE at Epoch 50" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/2_project/tsne_fc1_epoch100.png" title="t-SNE at Epoch 100" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### ⚙️ Technical Stack
- **Framework**: TensorFlow (low-level)  
- **Dataset**: CIFAR-10  
- **Architecture**: 3-layer CNN  
- **Visualization**: Matplotlib, Excel, t-SNE  
- **Reproducibility**: Model checkpoints, logs, experiment notes
