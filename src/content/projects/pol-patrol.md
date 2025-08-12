---
title: "Policy Compliance Dashboard (Pol Patrol)"
date: "2025-08-01"
tags: ["Kubernetes", "Policy Compliance", "DevOps"]
tech: ["Go", "Kyverno", "Prometheus", "Kubernetes"]
summary: "Visualizes Kyverno policy adoption across hundreds of workloads at Fastly."
cover: "/images/pol-patrol-cover.webp"
featured: true
links:
  github: "https://github.com/"
---
## Context
Fastly’s Cloud and Container Services team needed an internal solution to monitor policy compliance across Kubernetes clusters.

## Contribution
- Built dashboard from scratch based on end-user requirements
- Aggregated Prometheus metrics for CI/CD and runtime policy compliance

## Approach
- Backend in Go querying Prometheus
- Frontend interface to display compliance metrics

## Result
Gave engineers visibility into policy adoption trends, allowing targeted remediation of non-compliant workloads.

