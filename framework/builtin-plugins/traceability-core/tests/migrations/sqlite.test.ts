import { describe, expect, it } from "bun:test";

import {
  buildTraceabilityCoreSqliteMigrationSql,
  buildTraceabilityCoreSqliteRollbackSql,
  getTraceabilityCoreSqliteLookupIndexName,
  getTraceabilityCoreSqliteStatusIndexName
} from "../../src/sqlite";

describe("traceability-core sqlite helpers", () => {
  it("creates the business tables and indexes", () => {
    const sql = buildTraceabilityCoreSqliteMigrationSql().join("\n");

    expect(sql).toContain("CREATE TABLE IF NOT EXISTS traceability_core_primary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS traceability_core_secondary_records");
    expect(sql).toContain("CREATE TABLE IF NOT EXISTS traceability_core_exception_records");
    expect(sql).toContain(getTraceabilityCoreSqliteLookupIndexName("traceability_core_"));
    expect(sql).toContain(getTraceabilityCoreSqliteStatusIndexName("traceability_core_"));
  });

  it("rolls the sqlite tables back safely", () => {
    const sql = buildTraceabilityCoreSqliteRollbackSql({ tablePrefix: "traceability_core_preview_" }).join("\n");
    expect(sql).toContain("DROP TABLE IF EXISTS traceability_core_preview_exception_records");
  });
});
