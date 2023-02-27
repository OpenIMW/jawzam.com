import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structure } from "./sanity/desk/structure";
import { schemaTypes } from "./sanity/schemas";
import { defaultDocumentNode } from './sanity/desk/defaultDocumentNode';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: 'Jawzam CMS',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure,
      //defaultDocumentNode,
    }),
    visionTool()],
  schema: {
    types: schemaTypes,
  },
});
