---
layout: page
title: Predicting the Next Word from Scratch
description: Building and training a multi-layer perceptron for next-word prediction on a 250-word vocabulary using only numpy
img: assets/img/projects/3_project/1.png
importance: 3
category: work
related_publications: false
---

### 🎯 Motivation

This project tackles the challenge of next-word prediction in short text sequences using a **multi-layer perceptron (MLP)** built entirely from scratch using NumPy—no deep learning libraries like TensorFlow or PyTorch. While modern models often depend on large-scale transformer architectures, this work highlights the learning dynamics and architectural challenges of a minimalistic MLP trained on a constrained vocabulary.

The goal was to predict the most likely **4th word** given a sequence of 3 input words. With a controlled 250-word vocabulary and fixed-length sequences, the project focuses on foundational principles: **embedding representations**, **forward/backward propagation**, and **gradient-based optimization**.

---

### 📎 Links  
- 🔗 [GitHub Repository](https://github.com/sumeyye-agac/next-word-prediction-using-MLP-from-scratch)

---

### 🧠 Network Architecture

The model predicts the next word by processing three input words in sequence:

1. **Embedding Layer**: Each word index is converted to a one-hot vector and mapped to a 16-dimensional embedding (via matrix multiplication with a learned `W1`).
2. **Hidden Layer**: The three embeddings are concatenated into a 48-dimensional vector and passed to a hidden layer with 128 units and sigmoid activation.
3. **Output Layer**: A softmax layer predicts a 250-dimensional output representing the probability distribution over the vocabulary.

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/20epoch.png" title="Training Results (20 Epochs)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/50epoch.png" title="Training Results (50 Epochs)" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 🔢 Mathematical Formulation

We model next-word prediction as a 3-word input to 1-word output classification task using a 1-hidden-layer MLP trained from scratch. All inputs are one-hot vectors and weights are updated via manual backpropagation using stochastic gradient descent (SGD).

#### 🧾 Forward Propagation

Let:
- \( V \): Vocabulary size (250)  
- \( d \): Embedding dimension (16)  
- \( H \): Hidden layer size (128)  

Input word vectors (one-hot):
\[
\mathbf{x}_1, \mathbf{x}_2, \mathbf{x}_3 \in \mathbb{R}^V
\]

**Embedding transformation**:
\[
\mathbf{e}_i = W_1 \mathbf{x}_i, \quad W_1 \in \mathbb{R}^{d \times V}, \quad i=1,2,3
\]

**Concatenated input** to the hidden layer:
\[
\mathbf{h}_0 = \begin{bmatrix} \mathbf{e}_1 \\ \mathbf{e}_2 \\ \mathbf{e}_3 \end{bmatrix} \in \mathbb{R}^{3d}
\]

**Hidden layer activation**:
\[
\mathbf{h}_1 = \sigma(W_2 \mathbf{h}_0 + \mathbf{b}_1), \quad W_2 \in \mathbb{R}^{H \times 3d}, \quad \mathbf{b}_1 \in \mathbb{R}^{H}
\]

**Output logits and softmax**:
\[
\mathbf{z} = W_3 \mathbf{h}_1 + \mathbf{b}_2, \quad W_3 \in \mathbb{R}^{V \times H}, \quad \mathbf{b}_2 \in \mathbb{R}^{V}
\]
\[
\hat{\mathbf{y}} = \text{softmax}(\mathbf{z}) = \frac{e^{\mathbf{z}_i}}{\sum_{j=1}^{V} e^{\mathbf{z}_j}}
\]

#### 🎯 Loss Function

Cross-entropy loss between one-hot target \( \mathbf{y} \) and predicted \( \hat{\mathbf{y}} \):
\[
\mathcal{L} = -\sum_{i=1}^{V} y_i \log(\hat{y}_i)
\]

---

#### 🔁 Backward Propagation

**Error at output layer**:
\[
\delta_3 = \hat{\mathbf{y}} - \mathbf{y}
\]

**Gradients for output layer**:
\[
\nabla W_3 = \delta_3 \cdot \mathbf{h}_1^\top, \quad \nabla \mathbf{b}_2 = \delta_3
\]

**Error at hidden layer**:
\[
\delta_2 = (W_3^\top \delta_3) \odot \sigma'(\mathbf{h}_1)
\]

**Gradients for hidden layer**:
\[
\nabla W_2 = \delta_2 \cdot \mathbf{h}_0^\top, \quad \nabla \mathbf{b}_1 = \delta_2
\]

**Embedding gradient split** (backprop to \( W_1 \)):
Let \( \delta_e = W_2^\top \delta_2 \in \mathbb{R}^{3d} \), then split:
\[
[\delta_{e_1}, \delta_{e_2}, \delta_{e_3}] \in \mathbb{R}^{d}
\]
Update rule:
\[
\nabla W_1 += \delta_{e_i} \cdot \mathbf{x}_i^\top \quad \text{for } i=1,2,3
\]

---

All gradients are applied using SGD with learning rate \( \eta \):
\[
W \leftarrow W - \eta \nabla W
\]
Biases updated similarly.

---

### ⚗️ Experimentation & Insights

A wide range of experiments were conducted to understand what impacts model learning the most:

| Category              | Variants Explored                     |
|-----------------------|----------------------------------------|
| Initialization        | Zero, Random, Xavier (final)           |
| Learning Rate         | 0.1, 0.01 (final), 0.001               |
| Batch Size            | 10, 50, 100 (final), 200, 500          |
| Epochs                | 10, 20 (final), 50                     |
| Weight Updates        | Manual SGD via backward propagation    |
| Evaluation Strategy   | Per-epoch validation + test accuracy   |

Findings:
- **Zero initialization** failed due to symmetry.
- **Xavier initialization** worked best for sigmoid.
- **Batch size impact** was minimal *only* under optimal learning rates.
- Final performance reached ~36% accuracy — competitive given limited expressiveness and no pretrained embeddings.

---

### 📉 Performance Visualization

To monitor convergence, training and validation accuracy/loss were recorded per epoch. Results revealed that convergence stabilized after ~20 epochs, motivating early stopping.

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/20epoch.png" title="Epoch 20 Convergence" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/50epoch.png" title="Epoch 50 Convergence" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 🧬 Word Embedding Visualization

To inspect learned word semantics, the 16-dimensional embedding vectors were reduced to 2D using **t-SNE**, producing several **semantically or syntactically coherent clusters**:

<div class="row mt-3">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/1.png" title="Cluster 1" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/2.png" title="Cluster 2" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="row mt-3">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/3.png" title="Cluster 3" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/3_project/4.png" title="Cluster 4" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

Examples include:
- Modals: *can, could, might, should*  
- Pronouns: *my, your, their, his*  
- Temporal: *now, then, today*  
- Conjunctions: *and, but, or*

---

### 📌 Sample Predictions

The trained model could generate grammatically and semantically valid next-word predictions:

| Input Sequence       | Predicted Word |
|----------------------|----------------|
| city of new          | york           |
| life in the          | world          |
| he is the            | best           |

These results reflect learned sequential patterns despite architectural simplicity.

---

### ⚙️ Technical Stack
- **Language**: Python (NumPy only)
- **Network**: 1 hidden layer MLP with embeddings
- **Optimization**: Custom backward propagation & SGD
- **Evaluation**: Accuracy, Loss, Manual t-SNE, Prediction sampling
