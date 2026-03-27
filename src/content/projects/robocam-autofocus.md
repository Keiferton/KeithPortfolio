---
title: "RoboCam Autofocus"
date: "2023-12-01"
tags: ["Computer Vision", "Research Automation", "Microscopy"]
tech: ["Python", "OpenCV", "Gabor Filters", "3D Printing"]
summary: "Autofocus system for a 3D-printer-based microscope that reduced compromised imaging runs"
cover: "/images/autofocus_diagram.webp"
featured: false
categories: ["Esquerra Lab", "NIH URISE", "UCSF Collaboration"]
---
## Context
RoboCam was used for long-duration Drosophila imaging, but focus drift regularly compromised datasets during 24-hour runs. The system needed a reliable way to recover focus without constant manual intervention.

## Contribution
- Built an autofocus workflow for a 3D-printer-based microscope used in reproductive-toxicity studies.
- Applied OpenCV, Gabor filters, and z-stack analysis to identify the sharpest focal plane automatically.
- Designed modular 3D-printed mounts for the camera and sample plate to keep optical alignment stable across runs.

## Approach
The autofocus routine evaluated 5 to 20 images at each 0.1 mm z-step and selected the sharpest plane during setup and follow-up corrections. Initial focusing completed in about 30 seconds, while later corrections took about 15 seconds. I paired the software work with mechanical improvements so the imaging geometry stayed consistent during long recordings.

## Result
The system captured continuous 1080p video at 24 fps and stabilized focus across more than 40 imaging runs. 
