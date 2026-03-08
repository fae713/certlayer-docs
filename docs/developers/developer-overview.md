---
id: developer-overview
title: Developer Overview
sidebar_label: Developer Overview
sidebar_position: 1
---

# Developer Overview

CertLayer allows developers to integrate parametric triggers into their applications.

Developers can define triggers, monitoring conditions, and settlement logic.

## Creating a Trigger

Example logic for a trigger condition:

```python
if protocol_uptime < 99%:
    trigger compensation
```

## Deploying Intelligent Contracts

Developers deploy intelligent contracts on GenLayer to define trigger conditions and settlement rules.

## Integration Steps

Protocols integrate CertLayer by:

1. Defining monitoring conditions
2. Specifying settlement rules
3. Funding compensation pools
