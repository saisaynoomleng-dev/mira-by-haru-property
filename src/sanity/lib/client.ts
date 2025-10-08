import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

const token = process.env.SANITY_WRITE_TOKEN;

if (!token) throw new Error("Token Not Found");

export const client = createClient({
    projectId,
    dataset,
    token,
    apiVersion,
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});
