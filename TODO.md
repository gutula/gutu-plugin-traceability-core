# Traceability & Dimensions Core TODO

**Maturity Tier:** `Hardened`

## Shipped Now

- Exports 3 governed actions: `traceability.links.record`, `traceability.dimensions.publish`, `traceability.reconciliation.queue`.
- Owns 3 resource contracts: `traceability.links`, `traceability.dimensions`, `traceability.reconciliation`.
- Publishes 2 job definitions with explicit queue and retry policy metadata.
- Publishes 1 workflow definition with state-machine descriptions and mandatory steps.
- Adds richer admin workspace contributions on top of the base UI surface.
- Ships explicit SQL migration or rollback helpers alongside the domain model.
- Documents 5 owned entity surface(s): `Document Link`, `Traceability Dimension`, `Lineage Snapshot`, `Reconciliation Surface`, `Correlation Graph`.
- Carries 4 report surface(s) and 3 exception queue(s) for operator parity and reconciliation visibility.
- Tracks ERPNext reference parity against module(s): `Stock`, `Accounts`, `Selling`, `Buying`, `Support`.
- Operational scenario matrix includes `lead-to-cash-lineage`, `procure-to-pay-lineage`, `plan-to-produce-genealogy`.
- Governs 3 settings or policy surface(s) for operator control and rollout safety.

## Current Gaps

- Repo-local documentation verification entrypoints were missing before this pass and need to stay green as the repo evolves.

## Recommended Next

- Deepen drift detection and exception routing as more business plugins emit downstream linked work.
- Expose stronger operator tooling for process lineage and partial-failure recovery.
- Broaden lifecycle coverage with deeper orchestration, reconciliation, and operator tooling where the business flow requires it.
- Add more explicit domain events or follow-up job surfaces when downstream systems need tighter coupling.
- Convert more ERP parity references into first-class runtime handlers where needed, starting from `Serial No`, `Batch`, `Stock Ledger Entry`.

## Later / Optional

- Outbound connectors, richer analytics, or portal-facing experiences once the core domain contracts harden.
