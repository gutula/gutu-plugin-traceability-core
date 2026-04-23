export const reportDefinitions = [
  {
    "id": "traceability-core.report.01",
    "label": "Document Traceability Graph",
    "owningPlugin": "traceability-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "broken-lineage-links",
      "reconciliation-backlog",
      "missing-upstream-correlation"
    ]
  },
  {
    "id": "traceability-core.report.02",
    "label": "Reconciliation Queue Summary",
    "owningPlugin": "traceability-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "broken-lineage-links",
      "reconciliation-backlog",
      "missing-upstream-correlation"
    ]
  },
  {
    "id": "traceability-core.report.03",
    "label": "Serial or Batch Genealogy",
    "owningPlugin": "traceability-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "broken-lineage-links",
      "reconciliation-backlog",
      "missing-upstream-correlation"
    ]
  },
  {
    "id": "traceability-core.report.04",
    "label": "Downstream Failure Audit",
    "owningPlugin": "traceability-core",
    "source": "erpnext-parity",
    "exceptionQueues": [
      "broken-lineage-links",
      "reconciliation-backlog",
      "missing-upstream-correlation"
    ]
  }
] as const;
