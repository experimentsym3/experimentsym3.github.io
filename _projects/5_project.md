---
layout: page
title: Image Stitching
description: Full implementation of homography estimation and panoramic image stitching from scratch, including SVD-based estimation, backward warping, and blending experiments.
img: assets/img/projects/5_project/blended_image.jpg
importance: 5
category: work
related_publications: false
---

### 🎯 Motivation

This project demonstrates how **homography estimation** can be used to warp and blend images into panoramic mosaics. Unlike library-based stitching (e.g., OpenCV’s `cv2.stitcher()`), this implementation was built **completely from scratch** in Python, providing hands-on experience with projective geometry, SVD decomposition, and practical blending.

The work highlights the critical role of point correspondences and explores the effects of using fewer, more, or incorrect points.

---

### 📎 Links

- 🔗 [GitHub Repository](https://github.com/sumeyye-agac/homography-and-image-stitching-from-scratch)

---

### 🧠 Theoretical Background

Given two images of a planar scene, their relation is modeled by a **homography matrix** \(H\):

$$
\begin{bmatrix}
x' \\
y' \\
1
\end{bmatrix}
\sim
H \cdot
\begin{bmatrix}
x \\
y \\
1
\end{bmatrix}
$$

where:

$$
H =
\begin{bmatrix}
h_{11} & h_{12} & h_{13} \\
h_{21} & h_{22} & h_{23} \\
h_{31} & h_{32} & h_{33}
\end{bmatrix}
$$

To estimate \(H\), we:

1. Collect \(n\) point pairs \((x_i, y_i)\) ↔ \((x'_i, y'_i)\).
2. Formulate an overdetermined system:

$$
A \cdot h = 0
$$

where \(A\) is \(2n \times 9\).
3. Solve using **Singular Value Decomposition (SVD)**:

$$
A = U \cdot S \cdot V^T
$$

The last column of \(V\) yields the flattened homography matrix.

---

### ⚙️ Implementation Highlights

**Core Components:**

- **Point Selection**  
  Manual selection of corresponding points via `matplotlib.ginput()`.
- **Homography Estimation**  
  Custom SVD-based solver (`compute_homography()`).
- **Backward Warping**  
  Mapping destination pixels via the inverse homography (`warp()`).
- **Blending**  
  Offset-aware placement and overlap handling (`blend2images()`, `blend3images()`).

**Interpolation:**  
Nearest-neighbor interpolation was used for simplicity. Future improvements could include bilinear interpolation.

---

### 🧪 Experiments and Results

Below are **final results for each experiment**. They illustrate the effects of different correspondence strategies.

---

#### 📌 Paris 3-Image Mosaic (10 Correct Points)

![Paris Mosaic](/assets/img/projects/5_project/final_paris_mosaic_10points.jpg)

*Using 10 carefully selected correspondences per image pair.*

---

#### 📌 Paris 3-Image Mosaic (5 Correct Points)

![Paris Mosaic 5 Points](/assets/img/projects/5_project/final_paris_mosaic_5points.jpg)

*Reduced correspondences led to less precise alignment.*

---

#### 📌 Paris Mosaic with Wrong Points

![Paris Mosaic Wrong](/assets/img/projects/5_project/final_paris_mosaic_wrong.jpg)

*Adding 5 incorrect correspondences severely degraded the result.*

---

#### 📌 CMPE Building Mosaic (Middle-Out)

![CMPE Mosaic](/assets/img/projects/5_project/final_cmpe_mosaic.jpg)

*5 images stitched in middle-out order. Minor distortions due to limited overlap.*

---

#### 📌 North Campus Mosaic (Middle-Out)

![North Campus Mosaic](/assets/img/projects/5_project/final_north_mosaic.jpg)

*Challenging dataset with black regions due to projection misalignment.*

---

### 📝 Reflections

- **Point Accuracy:** Selecting high-quality correspondences is essential for reliable warping.
- **SVD Stability:** The least-squares SVD solution worked well as long as outliers were minimized.
- **Blending:** Simple pixel overlap can produce visible seams; more advanced blending could further improve results.
- **Learning:** Implementing every step manually provided deep understanding of homography in practice.

---

### ⚙️ Technical Stack

- **Language:** Python (NumPy, Matplotlib)
- **Algorithm:** Homography estimation via SVD
- **Warping:** Backward mapping with nearest-neighbor interpolation
- **Blending:** Custom mosaic generation functions

---

Feel free to explore the code and try stitching your own image sets!
