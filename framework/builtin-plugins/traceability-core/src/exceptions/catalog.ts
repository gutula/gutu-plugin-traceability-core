export const exceptionQueueDefinitions = [
  {
    "id": "broken-lineage-links",
    "label": "Broken Lineage Links",
    "severity": "medium",
    "owner": "operator",
    "reconciliationJobId": "traceability.reconciliation.run"
  },
  {
    "id": "reconciliation-backlog",
    "label": "Reconciliation Backlog",
    "severity": "medium",
    "owner": "operator",
    "reconciliationJobId": "traceability.reconciliation.run"
  },
  {
    "id": "missing-upstream-correlation",
    "label": "Missing Upstream Correlation",
    "severity": "medium",
    "owner": "operator",
    "reconciliationJobId": "traceability.reconciliation.run"
  }
] as const;
