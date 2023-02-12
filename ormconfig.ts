import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  "type": "sqlite",
  "database": "src/database/database.sqlite",
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  
})

