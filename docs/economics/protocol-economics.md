---
id: protocol-economics
title: Protocol Economics
sidebar_label: Protocol Economics
sidebar_position: 1
---

# CertLayer Protocol Economics

CertLayer introduces an economic framework that enables protocols to prove reliability, fund compensation guarantees, and maintain transparent accountability.

Protocols pay CertLayer for monitoring and enforcement infrastructure, while maintaining a compensation pool that can be used to compensate users when incidents occur.

CertLayer generates revenue through subscriptions, settlement fees, and access to reliability data.

## Economic Model Overview

The CertLayer economic system has three main goals:

1. **Enable verifiable reliability guarantees** — Protocols maintain compensation pools that can automatically pay users when failures occur.
2. **Align incentives between protocols and users** — Reliable protocols benefit from better economics and reputation.
3. **Fund monitoring and enforcement infrastructure** — CertLayer earns revenue through subscriptions and settlement activity.

## Core Economic Components

### 1. Monthly Subscription (S)

Protocols pay a recurring subscription fee for access to CertLayer monitoring, incident management, and reliability enforcement infrastructure.

Subscription pricing depends on the protocol's service tier.

### 2. Compensation Pool (C_pool)

Each protocol maintains a protocol-funded compensation pool, typically denominated in stablecoins such as USDC.

This pool is used to compensate users when incidents occur. The pool ensures that reliability guarantees are backed by actual funds.

### 3. Minimum Required Pool (C_min)

Protocols must maintain a minimum compensation pool size to ensure adequate coverage.

The required pool is calculated as:

```
C_min = max(tier_floor, expected_30d_claims × 1.2)
```

This ensures that the pool can cover expected claims plus a safety margin.

**Example tier minimums:**

| Tier | Minimum Pool |
|---|---|
| Starter | 5,000 USDC |
| Growth | 25,000 USDC |
| Enterprise | 100,000 USDC |

If the compensation pool falls below the minimum requirement, the protocol enters **Coverage Limited** status.

### 4. Settlement Fee (F_settle)

When CertLayer executes compensation payouts, a small settlement fee is charged to support the infrastructure required to process and verify settlement events.

### 5. Commitment Bond (B_commit)

Protocols may optionally post a bond when making public commitments.

Examples include:

- Roadmap milestones
- Infrastructure upgrades
- Security improvements
- Governance commitments

If the commitment is missed, the bond may be partially or fully slashed.

## Protocol Pricing

A protocol's total monthly cost depends on its subscription tier, monitoring usage, and executed settlements.

**Monthly cost formula:**

```
monthly_cost = S_tier + endpoint_fee + monitoring_fee + (F_settle × payouts_this_month)
```

**Example pricing tiers:**

- **Starter** — small protocols and early-stage projects
- **Growth** — mid-size protocols with active user bases
- **Enterprise** — large infrastructure providers

Higher tiers typically support more monitoring endpoints and larger compensation pools.

## Compensation Pool Requirements

If the pool falls below the required level:

- The protocol may be marked as **Coverage Limited**
- New commitments may be restricted
- Reliability scores may be impacted

## Reliability Incident Payouts

When a reliability incident occurs, affected users may receive compensation based on predefined formulas.

**Individual user payout:**

```
user_payout = min(user_cap, base_comp + (downtime_hours × hourly_rate))
```

**Total payout for the incident:**

```
P_total = sum(all user_payouts)
```

**Pro-Rata Distribution** — If the total payout exceeds the compensation pool (`P_total > C_pool`), payouts are distributed proportionally:

```
final_user_payout = user_payout × (C_pool / P_total)
```

## Hack Incident Payouts

For security incidents detected through HackDetection, each user's payout is calculated as:

```
security_payout = min(loss × coverage_factor, security_user_cap)
```

If the compensation pool cannot fully cover losses, payouts are distributed proportionally.

## Commitment Economics

If commitments are missed:

- The protocol's reliability score may decrease
- Commitment bonds may be partially or fully slashed
- Repeated failures may lead to probation or suspension

## Reputation-Based Economics

| Reliability Tier | Economic Impact |
|---|---|
| AAA / AA | Lower pool requirements |
| A / B | Standard requirements |
| C or below | Higher pool requirements and stricter limits |

## Anti-Abuse Protections

CertLayer includes safeguards to prevent abuse of the incident and dispute system:

- Dispute bonds to discourage spam claims
- Penalties for false disputes
- Unique incident identifiers
- Challenge windows for incident verification

## CertLayer Revenue Model

CertLayer generates revenue through three primary mechanisms:

1. **Subscription Fees** — Protocols pay monthly fees for monitoring, enforcement, and platform access.
2. **Settlement Fees** — Small fees are charged on executed compensation payouts.
3. **Data and Reputation Access** — Advanced reliability data and reputation insights may be available through premium API access.
