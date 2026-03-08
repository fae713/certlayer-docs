---
id: hackdetection
title: HackDetection Security Layer
sidebar_label: HackDetection
sidebar_position: 4
---

# HackDetection Security Layer

## Overview

HackDetection is the integrated security coordination layer within CertLayer.

It monitors suspicious transaction activity across protected protocols and enables coordinated security responses.

HackDetection enhances CertLayer's reliability guarantees by detecting potential exploits and enabling rapid mitigation actions.

## Suspicious Transaction Analysis

Transactions submitted to HackDetection are analyzed using a combination of:

- Pattern recognition
- Anomaly detection
- Consensus-assisted validation
- AI-assisted signal analysis

Each analyzed transaction receives a risk score representing the likelihood of malicious activity.

## Risk Scoring

Every monitored transaction hash is assigned a dynamic risk score.

Risk signals may include:

- Abnormal contract interactions
- Rapid liquidity withdrawals
- Exploit-like transaction patterns
- Interaction with known malicious addresses

Risk scoring allows protocols to respond before an exploit escalates.

## Emergency Response Controls

HackDetection supports coordinated emergency actions including:

- Circuit-breaker pause signals
- Address blacklisting
- Security event logging
- Monitoring system integrations

These mechanisms allow rapid response to suspicious activity.

## Emergency Pause Model

CertLayer supports emergency pause signaling across integrated protocols.

:::important
CertLayer does not directly halt external protocols. Protocols must integrate pause mechanisms using one of the following approaches.
:::

### On-Chain Guard Checks

Protocols may implement guard checks that query CertLayer pause signals.

**Example:**

```solidity
should_pause_protocol(address(this))
```

### Off-Chain Automation

Protocols may run monitoring bots that listen for pause signals and automatically execute protocol pause functions.

This design ensures that protocols maintain explicit control over their pause mechanisms.
