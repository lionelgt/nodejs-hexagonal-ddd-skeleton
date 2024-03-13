import z from 'zod';

const gitHubRepoOwnerSchema = z.object({
  login: z.string(),
  url: z.string(),
});

const gitHubRepoSchema = z.object({
  name: z.string(),
  full_name: z.string(),
  owner: gitHubRepoOwnerSchema,
});

export function parse(input: any) {
  return gitHubRepoSchema.safeParse(input);
}

export function partialParse(input: any) {
  return gitHubRepoSchema.partial().safeParse(input);
}
