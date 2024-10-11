import { loadEnvConfig } from "@next/env";
import { z } from "zod";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const envSchema = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z.string().default("development"),
  PORT: z.string().default("3000"),
});

export const env = envSchema.parse(process.env);
export type Env = z.infer<typeof envSchema>;
