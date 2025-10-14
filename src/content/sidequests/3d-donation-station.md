---
title: "3D Donation Station"
date: "2025-10-01"
summary: "3D-printed kiosk with an embedded NFC tag that jumps supporters straight to the right campus giving page."
thumbs:
  - "/images/printed-cube.jpg"
  - "/images/sliced-station.jpg"
  - "/images/donation-nfc-notification.png"
  - "/images/donation-landing-page.png"
tags:
  - "3D Printing"
  - "NFC"
  - "Shapr3D"
  - "Rapid Prototyping"
glb: true
glbPath: "/images/models/3D-Donation-Station-NFC.glb"
---

### Why build it?
Student orgs can technically accept funds through UCORP, but the official interface is slow, clunky, and missing modern payment options. A one-off GiveCampus campaign last semester proved donors will engage when the experience feels as simple as Apple Pay or Google Pay, but most departments still have to link people to the old flows. I'm hoping that this idea can start conversations about the benefits of modern payment interfaces.

### The concept
I designed a countertop “donation station” that any club can drop on their table at events. The statue is modeled in Shapr3D, using pause-at-height function to hide a pre-programmed NFC tag. Tapping or scanning the tag lands the donor on that org’s GiveCampus page with the correct designation preloaded. I’m also planning a QR-code fallback on the underside so if NFC ever fails, donors still have a backup path. Tap the interactive model above to explore the statue.

### Early learnings
- **Embedded NFC pockets:** The tag outline is subtracted from the statue model so there’s a snug landing zone. During slicing I pause the print right before the top cover layers, drop in a pre-programmed tag, then resume so it’s fully encased.
- **Secure encoding:** Each tag is flashed with the GiveCampus short link, locked with a password, and set to read-only so nobody can overwrite it once it’s deployed.
- **Rollout path:** Creating custom variants for campus departments and delivering them pre-programmed with the embedded tag.

### Next steps: 
- Test the statue with a few departments 
- Collect tap-through metrics during tabling events
- Bundle the printable files plus encoding instructions so other organizations can easily create and use it. The end goal is a tactile, interactive donation object that helps clubs, departments, and club sports grow their discretionary funding.
