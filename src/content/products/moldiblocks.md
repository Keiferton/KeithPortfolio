---
title: "MoldiBlocks"
date: "2025-10-07"
featured: true
summary: "Low-cost, reusable silicone molds for tissue microarrays, developed through academic research."
cover: "/images/Side-By-Side_Molds.png"
thumbs:
  - "/images/Side-By-Side_Molds.png"
  - "/images/resin-mold-master.jpg"
  - "/images/molds-curing.jpg"
  - "/images/failed-prototype-silicone-mold.jpg"
  - "/images/good-mold-pic1.jpg"
  - "/images/good-mold-pic2.jpg"
tags:
  - "SLA Printing"
  - "Silicone Casting"
  - "Lab Tooling"
glb: true
glbPath: "/images/models/3mm_4mm_MoldiBlocks.glb"
---

### Why build it?
Commercial silicone molds for tissue microarrays are expensive and limit experimentation, particularly for smaller or early-stage research projects. A PhD researcher at UC Davis asked whether a lower-cost alternative could be fabricated using accessible tooling. MoldiBlocks began as an effort to reduce the cost of TMA workflows while developing a repeatable approach to fabricating reliable lab-grade silicone molds.

### System concept
MoldiBlocks uses a reusable SLA-printed master mold to cast flexible, platinum-cured silicone trays compatible with standard tissue core dimensions. The master is fully post-cured prior to casting to prevent silicone inhibition. Platinum-cure silicone is then poured, degassed, and demolded to produce a reusable tray suitable for repeated experimental use.

### Tools & materials
- Shapr3D for CAD
- Elegoo Saturn 2 (ABS-Like V3 resin, transparent)
- Let’s Resin 15A platinum-cure silicone rubber
- EZ Release mold release
- IPA wash station and UV cure station
- Syringes for controlled pours
- Vacuum chamber for silicone degassing

### Early learnings
- **Post-curing is critical:** Residual uncured resin inhibits platinum-cure silicone crosslinking. Extended UV curing followed by warm-air drying is required before casting.
- **Degassing improves geometry preservation:** Vacuum chamber degassing significantly reduces trapped air and improves feature fidelity compared to syringe-only filling, particularly in narrow core bores.
- **Fill strategy matters:** Controlled filling combined with degassing yields more consistent core geometry and fewer defects across the mold.

### Current Status & Next steps
- Actively testing molds designed for 2 mm tissue cores, with plans to expand to additional core sizes.
- Iterating on a second-generation master with refined tolerances and improved demolding behavior.
- Validating durability through repeated paraffin wax pours.
- Exploring silicone pigmentation to visually distinguish silicone molds from paraffin blocks during handling.
- Investigating removable trays or ejector mechanisms to reduce mechanical stress during sample removal.
