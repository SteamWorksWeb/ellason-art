import { buildConfig } from 'payload';
import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

import { Users } from './collections/Users';
import { Pages } from './collections/Pages';
import { Media } from './collections/Media';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Pages,
    Media,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'fallback-secret-for-development-only',
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    }
  }),
});
