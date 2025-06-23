---
layout: page
title: Gaussian Mixture Modeling with Expectation-Maximization
description: Step-by-step implementation of the expectation-maximization algorithm for gaussian mixture models with dynamic clustering visualizations
img: assets/img/projects/4_project/EMforGM_iteration14-101001.png
importance: 3
category: work
related_publications: false
---

### 🎯 Motivation

This project demonstrates how the **Expectation-Maximization (EM)** algorithm can be used to fit a **Gaussian Mixture Model (GMM)** to unlabeled data. Unlike K-means, GMM with EM models data as a combination of probabilistic clusters with soft assignments, providing more flexible and realistic representations of real-world data.

The implementation was built from scratch in Python, with custom logic for the E-step and M-step. Visualizations of how cluster assignments evolve over iterations provide valuable intuition on the convergence behavior and sensitivity to initialization.

---

### 📎 Links  
- 🔗 [GitHub Repository](https://github.com/sumeyye-agac/logistic-regression-from-scratch)

---

### 🧠 Algorithm Summary

We aim to fit the data with \( K = 3 \) Gaussian components. The EM algorithm proceeds iteratively with the following two steps:

1. **E-step**: Compute soft cluster assignments (responsibilities) for each point using current estimates of means, covariances, and mixture weights.
2. **M-step**: Update the parameters (means, covariances, and weights) by maximizing the expected log-likelihood based on current responsibilities.

Convergence is detected when changes in log-likelihood fall below a threshold.

---

### 📊 Iterative Clustering Process

We tracked the cluster assignment evolution visually across several EM steps, revealing how the model gradually finds the optimal Gaussian boundaries.

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration0.png" title="Iteration 0 (Random Init)" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration5.png" title="Iteration 5" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration10.png" title="Iteration 10" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration15.png" title="Iteration 15" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration19.png" title="Iteration 19" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration21-[[0.25, 0.52], [0.0, 0.0], [0.63, 0.7]].png" title="Iteration 21" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 🧮 Mathematical Formulation

Let \( \mathbf{x}_i \in \mathbb{R}^d \) be the data point, and let \( \pi_k \), \( \mu_k \), and \( \Sigma_k \) be the weight, mean, and covariance matrix for Gaussian component \( k \). Then:

#### **E-step**: Responsibility computation

$$
\gamma_{ik} = \frac{\pi_k \, \mathcal{N}(\mathbf{x}_i \mid \mu_k, \Sigma_k)}{\sum_{j=1}^K \pi_j \, \mathcal{N}(\mathbf{x}_i \mid \mu_j, \Sigma_j)}
$$

#### **M-step**: Parameter updates

$$
N_k = \sum_{i=1}^n \gamma_{ik}, \quad
\mu_k = \frac{1}{N_k} \sum_{i=1}^n \gamma_{ik} \mathbf{x}_i
$$

$$
\Sigma_k = \frac{1}{N_k} \sum_{i=1}^n \gamma_{ik} (\mathbf{x}_i - \mu_k)(\mathbf{x}_i - \mu_k)^\top
$$

$$
\pi_k = \frac{N_k}{n}
$$

---

### 📈 Sensitivity to Initialization

The final clusters depend heavily on initialization, as shown below:

<div class="row">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration1-3x00.png" title="Init 1" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration1-3x1.5_2.7.png" title="Init 2" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="row mt-3">
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration8-1.5_2.7__10_1.5_2.7.png" title="Init 3" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm">
    {% include figure.liquid path="assets/img/projects/4_project/EMforGM_iteration14-01-10-10.png" title="Init 4" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

### 🧪 Additional Explorations

- Explored log-likelihood convergence patterns  
- Analyzed learned mixture weights  
- Compared EM-GMM against K-means in qualitative and quantitative terms  
- Validated learned posteriors through visual inspection

---

### ⚙️ Technical Stack

- **Language**: Python (NumPy, Matplotlib, Seaborn)
- **Algorithm**: Expectation-Maximization for Gaussian Mixture Models
- **Visualization**: Iterative clustering, trajectory, parameter inspection
- **Evaluation**: Likelihood convergence, visual inspection

---
