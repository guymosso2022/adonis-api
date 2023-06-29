import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "national_identity_cards";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("first_name");
      table.string("last_name");
      table.string("job");
      table.string("email");
      table.string("code");
      table.string("birth_date");
      table.string("birth_place");
      table.string("sex");
      table.string("nationality");
      table.string("expiration_date");
      table.string("place_of_issue");
      table.string("date_of_issue");

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
