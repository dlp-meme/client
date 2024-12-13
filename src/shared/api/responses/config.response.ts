import { z } from 'zod';

export const ConfigResponseSchema = z.object({
  server_host: z.string().nullable(),
}).transform(({ server_host }) => ({ serverHost: server_host }));

export type ConfigResponse = z.infer<typeof ConfigResponseSchema>;
