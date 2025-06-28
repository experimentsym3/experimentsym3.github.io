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

This project demonstrates how **homography estimation** can be used to warp and blend images into panoramic mosaics. Unlike using ready-made libraries (e.g., OpenCV's `stitcher()`), this pipeline was built **entirely from scratch in Python**, providing a clear, step-by-step understanding of projective geometry and practical blending challenges.

---

### 📎 Links

- 🔗 [GitHub Repository](https://github.com/sumeyye-agac/homography-and-image-stitching-from-scratch)

---

### 🧠 Theoretical Background

Given two images of a planar scene, their relation is modeled by a **homography matrix** $$H$$:

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

To estimate $$H$$:

1. Collect $$n$$ point pairs $$(x_i, y_i)$$ ↔ $$(x'_i, y'_i)$$.
2. Formulate the system:

$$
A \cdot h = 0
$$

with $$A$$ of shape $$2n \times 9$$.
3. Solve using **Singular Value Decomposition (SVD)**:

$$
A = U \cdot S \cdot V^T
$$

The last column of $$V$$ reshaped to $$3 \times 3$$ gives $$H$$.

---

### 🛠️ Pipeline Overview

A Python program was developed to stitch multiple input images into a single panoramic image. The process consists of **four main modules**:

---

**1️⃣ Point Selection**  
Corresponding points were selected manually by clicking on the images. The selection quality is critical—stitching errors often result from:  
- The number of points chosen  
- Their distribution across the images  
- The precise ordering of point pairs  

*Example of selected points on images:*

<div class="row mt-3">
  <div class="col-sm-4">
    <img src="/assets/img/projects/5_project/points_paris_a.jpg" alt="Points Paris A" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Paris A - Selected Points</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/5_project/points_paris_b.jpg" alt="Points Paris B" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Paris B - Selected Points</em></p>
  </div>
  <div class="col-sm-4">
    <img src="/assets/img/projects/5_project/points_paris_c.jpg" alt="Points Paris C" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Paris C - Selected Points</em></p>
  </div>
</div>

---

**2️⃣ Homography Estimation**  
A **homography matrix $$H$$** was computed to map points from each source image onto the plane of the destination (base) image, aligning them geometrically. For the Paris experiments, `paris_b` was used as the base image.

---

**3️⃣ Image Warping**  
Each source image was warped onto the plane of the base image using backward warping. This means iterating over destination pixels and mapping them back into source coordinates.

*Example warped images:*

<div class="row mt-3">
  <div class="col-sm-6">
    <img src="/assets/img/projects/5_project/warped_paris_a.jpg" alt="Warped Paris A" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Warped Paris A</em></p>
  </div>
  <div class="col-sm-6">
    <img src="/assets/img/projects/5_project/warped_paris_c.jpg" alt="Warped Paris C" class="img-fluid rounded z-depth-1">
    <p class="mt-2 text-center"><em>Warped Paris C</em></p>
  </div>
</div>

---

**4️⃣ Blending Images**  
Finally, all warped images were blended with the base image to produce a continuous panorama. Simple pixel replacement was used in overlapping regions.

*Example of a blended intermediate result:*

![Blended Image](/assets/img/projects/5_project/blended_image.jpg)

---

✅ **Summary of Steps**
To create a stitched panorama, **these four steps were followed in sequence**:

1. Select corresponding points carefully.
2. Compute the homography matrix via SVD.
3. Warp the source images onto the destination plane.
4. Blend all images into a single mosaic.

---

### 🧪 Experiments and Results

Below are the final results for the Paris dataset, illustrating how the number and quality of point correspondences impact stitching quality.

---

#### 📌 Paris 3-Image Mosaic (10 Correct Points)

![Paris Mosaic - 10 Points](/assets/img/projects/5_project/final_paris_mosaic_10points.jpg)

*Stitched panorama with 10 carefully selected correspondences per pair.*

---

#### 📌 Paris 3-Image Mosaic (5 Correct Points)

![Paris Mosaic - 5 Points](/assets/img/projects/5_project/final_paris_mosaic_5points.jpg)

*Using fewer correspondences resulted in visible misalignments.*

---

#### 📌 Paris Mosaic with Wrong Points

![Paris Mosaic - Wrong Points](/assets/img/projects/5_project/final_paris_mosaic_wrong.jpg)

*Adding incorrect correspondences severely degraded the output.*

---

### 📝 Reflections

- **Point Selection:** The most critical factor in quality.
- **SVD Stability:** Effective as long as outliers were minimized.
- **Blending:** Simple overlap merging caused visible seams; more advanced blending could improve results.
- **Learning Outcome:** Implementing this pipeline manually provided an in-depth understanding of homography-based image stitching.

---

Feel free to explore the repository and try stitching your own images!