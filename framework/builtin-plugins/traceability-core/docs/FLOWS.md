# Traceability & Dimensions Core Flows

## Happy paths

- `traceability.links.record`: Record Traceability Link
- `traceability.dimensions.publish`: Publish Common Dimension
- `traceability.reconciliation.queue`: Queue Reconciliation Item

## Operational scenario matrix

- `lead-to-cash-lineage`
- `procure-to-pay-lineage`
- `plan-to-produce-genealogy`

## Action-level flows

### `traceability.links.record`

Record Traceability Link

Permission: `traceability.links.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s idempotent semantics.

Side effects:

- Mutates or validates state owned by `traceability.links`, `traceability.dimensions`, `traceability.reconciliation`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `traceability.dimensions.publish`

Publish Common Dimension

Permission: `traceability.dimensions.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `traceability.links`, `traceability.dimensions`, `traceability.reconciliation`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


### `traceability.reconciliation.queue`

Queue Reconciliation Item

Permission: `traceability.reconciliation.write`

Business purpose: Expose the plugin’s write boundary through a validated, auditable action contract.

Preconditions:

- Caller input must satisfy the action schema exported by the plugin.
- The caller must satisfy the declared permission and any host-level installation constraints.
- Integration should honor the action’s non-idempotent semantics.

Side effects:

- Mutates or validates state owned by `traceability.links`, `traceability.dimensions`, `traceability.reconciliation`.
- May schedule or describe follow-up background work.

Forbidden shortcuts:

- Do not bypass the action contract with undocumented service mutations in application code.
- Do not document extra hooks, retries, or lifecycle semantics unless they are explicitly exported here.


## Cross-package interactions

- Direct dependencies: `auth-core`, `org-tenant-core`, `role-policy-core`, `audit-core`, `workflow-core`, `document-core`
- Requested capabilities: `ui.register.admin`, `api.rest.mount`, `data.write.traceability`, `events.publish.traceability`
- Integration model: Actions+Resources+Jobs+Workflows+UI
- ERPNext doctypes used as parity references: `Serial No`, `Batch`, `Stock Ledger Entry`, `Stock Reservation Entry`, `Delivery Note`, `Purchase Receipt`
- Recovery ownership should stay with the host orchestration layer when the plugin does not explicitly export jobs, workflows, or lifecycle events.
