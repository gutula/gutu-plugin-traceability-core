export const domainCatalog = {
  "erpnextModules": [
    "Stock",
    "Accounts",
    "Selling",
    "Buying",
    "Support"
  ],
  "erpnextDoctypes": [
    "Serial No",
    "Batch",
    "Stock Ledger Entry",
    "Stock Reservation Entry",
    "Delivery Note",
    "Purchase Receipt"
  ],
  "ownedEntities": [
    "Document Link",
    "Traceability Dimension",
    "Lineage Snapshot",
    "Reconciliation Surface",
    "Correlation Graph"
  ],
  "reports": [
    "Document Traceability Graph",
    "Reconciliation Queue Summary",
    "Serial or Batch Genealogy",
    "Downstream Failure Audit"
  ],
  "exceptionQueues": [
    "broken-lineage-links",
    "reconciliation-backlog",
    "missing-upstream-correlation"
  ],
  "operationalScenarios": [
    "lead-to-cash-lineage",
    "procure-to-pay-lineage",
    "plan-to-produce-genealogy"
  ],
  "settingsSurfaces": [
    "Stock Settings",
    "Accounts Settings",
    "Support Settings"
  ],
  "edgeCases": [
    "missing upstream references",
    "cyclic document linkage",
    "partial reconciliation across modules"
  ]
} as const;
