import { describe, expect, it } from "bun:test";

import {
  buildTraceabilityCoreMigrationSql,
  buildTraceabilityCoreRollbackSql,
  getTraceabilityCoreLookupIndexName,
  getTraceabilityCoreStatusIndexName
} from "../../src/postgres";

describe("traceability-core postgres helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildTraceabilityCoreMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS traceability_core.primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS traceability_core.secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS traceability_core.exception_records");
    expect(sql).toContain(getTraceabilityCoreLookupIndexName());
    expect(sql).toContain(getTraceabilityCoreStatusIndexName());
  });

  it("rolls the schema back safely", () => {
    const sql = buildTraceabilityCoreRollbackSql({ schemaName: "traceability_core_preview", dropSchema: true }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS traceability_core_preview.exception_records");
    expect(sql).toContain("DROP SCHEMA IF EXISTS traceability_core_preview CASCADE");
  });
});
