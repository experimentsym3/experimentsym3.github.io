---
layout: page
title: Image Stitching (Panoramic) from Scratch
description: Full implementation of homography estimation and panoramic image stitching from scratch, including SVD-based estimation, backward warping, and blending experiments.
img: assets/img/projects/5_project/cover.jpg
importance: 5
category: work
related_publications: false
---

### 🎯 Motivation

This project demonstrates how **homography estimation** can be used to warp and blend images into panoramic mosaics. Unlike using ready-made libraries (e.g., OpenCV's `stitcher()`), this pipeline was built **entirely from scratch in Python**, providing deep understanding of projective geometry, matrix decomposition, and blending challenges.

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

To estimate \(H\):

1. Collect \(n\) point pairs \((x_i, y_i)\) ↔ \((x'_i, y'_i)\).
2. Formulate the system:

$$
A \cdot h = 0
$$

with \(A\) of shape \(2n \times 9\).
3. Solve using **Singular Value Decomposition (SVD)**:

$$
A = U \cdot S \cdot V^T
$$

The last column of \(V\) reshaped to \(3 \times 3\) gives \(H\).

---

### ⚙️ Implementation Highlights

**Core Components:**

- **Point Selection**  
  Manual selection via `matplotlib.ginput()`.
- **Homography Estimation**  
  SVD-based solver: `compute_homography()`.
- **Backward Warping**  
  Transforming the target image: `warp()`.
- **Blending**  
  Offset-aware mosaics: `blend2images()` and `blend3images()`.

**Interpolation:**  
Nearest-neighbor was used for simplicity; bilinear can be integrated later.

---

### 🛠️ Pipeline Overview

A Python program was developed to stitch two or more input images together into a single panoramic image. The process consists of **four main modules**:

---

**1️⃣ Point Selection**  
Given two images, corresponding points are selected either interactively (using `ginput`) or via predetermined coordinates. The selection quality is critical—stitching errors are most often due to:  
- The number of points chosen  
- Their spatial distribution across the images  
- The precise ordering of point pairs  

---

**2️⃣ Homography Estimation**  
A **homography matrix \(H\)** is computed to map points from the source image plane to the destination (base) image plane, aligning them geometrically. In this work, **singular value decomposition (SVD)** was used to solve the overdetermined system of equations and estimate the best-fit homography. For example, `paris_b` was used as the base image and `paris_a` or `paris_c` as sources.

---

**3️⃣ Image Warping**  
A custom warping function takes the source image and the computed homography matrix \(H\) to generate a **warped image projected into the base image’s plane**. This project employed **backward warping**, which iterates over destination pixels and maps them to source coordinates using the inverse homography.

---

**4️⃣ Blending Images**  
Finally, the **blending step** combines the warped images and the base image into a seamless mosaic. For stitching three images, a dedicated method (`blend3images`) was implemented, accepting the base image, two warped images, and their corresponding offsets in x and y directions. The function assembles all parts into the final composite panorama.

---

✅ **Summary of Steps**
To create a stitched panorama, **these four steps must be followed in sequence**:

1. Select corresponding points carefully.
2. Compute the homography matrix via SVD.
3. Warp the source image(s) onto the destination plane.
4. Blend all images into a single mosaic.

---

### 🖼️ Intermediate Warping Example

Below you see the **step-by-step warping process** on the Paris dataset:

- **Base image**:

  ![Base Image - Paris B](/assets/img/projects/5_project/paris_b.jpg)

- **Warped source images**:

  ![Warped Paris A](/assets/img/projects/5_project/warped_paris_a.jpg)

  ![Warped Paris C](/assets/img/projects/5_project/warped_paris_c.jpg)

- **Blended result of two images**:

  ![Blended Image](/assets/img/projects/5_project/blended_image.jpg)

---

### 🧪 Experiments and Results

Below are the final results of the main experiments, demonstrating the impact of point selection and blending strategies.

---

#### 📌 Paris 3-Image Mosaic (10 Correct Points)

![Paris Mosaic - 10 Points](/assets/img/projects/5_project/final_paris_mosaic_10points.jpg)

*Stitched panorama with 10 high-quality correspondences per pair.*

---

#### 📌 Paris 3-Image Mosaic (5 Correct Points)

![Paris Mosaic - 5 Points](/assets/img/projects/5_project/final_paris_mosaic_5points.jpg)

*Using fewer correspondences produced misalignments.*

---

#### 📌 Paris Mosaic with Wrong Points

![Paris Mosaic - Wrong Points](/assets/img/projects/5_project/final_paris_mosaic_wrong.jpg)

*Adding 5 incorrect correspondences severely degraded the output.*

---

#### 📌 CMPE Building Mosaic (Middle-Out)

![CMPE Mosaic](/assets/img/projects/5_project/final_cmpe_mosaic.jpg)

*Five images stitched in middle-out order; minor distortions remain.*

---

#### 📌 North Campus Mosaic (Middle-Out)

![North Campus Mosaic](/assets/img/projects/5_project/final_north_mosaic.jpg)

*Challenging dataset with limited overlap and projection misalignment.*

---

### 📝 Reflections

- **Point Selection:** The single most important factor in quality.
- **SVD Stability:** Robust as long as outliers were minimized.
- **Blending:** Simple overlap merging causes visible seams; advanced blending is a future improvement.
- **Learning Outcome:** Implementing the full pipeline manually provided deep intuition into each step of homography-based stitching.

---

### ⚙️ Technical Stack

- **Language:** Python (NumPy, Matplotlib)
- **Algorithm:** Homography estimation via SVD
- **Warping:** Backward mapping with nearest-neighbor interpolation
- **Blending:** Custom mosaic assembly

---

Feel free to explore the code and try stitching your own images!
