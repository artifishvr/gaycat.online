import { createDirectus, staticToken, rest } from "@directus/sdk";
import { getSecret } from "astro:env/server";

interface GayCats {
  id: number;
  name: string;
  icon: string;
  link: string;
}

interface Schema {
  gay_cats: GayCats[];
}

const client = createDirectus<Schema>(getSecret("DIRECTUS_URL") ?? "")
  .with(staticToken(getSecret("DIRECTUS_TOKEN") ?? ""))
  .with(rest());

export default client;
