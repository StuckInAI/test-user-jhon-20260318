import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ContactSubmission } from './entities/ContactSubmission';
import path from 'path';

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  const dbPath = process.env.DATABASE_PATH
    ? path.resolve(process.env.DATABASE_PATH)
    : path.resolve('./data/site.db');

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: dbPath,
    entities: [ContactSubmission],
    synchronize: true,
    logging: process.env.NODE_ENV !== 'production',
  });

  await dataSource.initialize();
  return dataSource;
}
