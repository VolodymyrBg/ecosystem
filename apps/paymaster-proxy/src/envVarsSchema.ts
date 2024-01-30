import { z } from 'zod'

export const envVarsSchema = z.object({
  PORT: z.coerce.number().describe('Port to listen on'),
  HOST: z.string().default('0.0.0.0').describe('Hostname for server binding'),
})