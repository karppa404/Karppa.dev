import { Octokit } from "octokit";
import { env } from "$env/dynamic/private";
// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
export const octokit = new Octokit({ auth: env.PRIVATE_GH_TOKEN});
