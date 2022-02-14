import { DocumentDefinition, FilterQuery, LeanDocument } from "mongoose";

import ContentModel, { ContentDocument } from "../models/content.model";

export async function createContent(
  input: DocumentDefinition<ContentDocument>
) {
  return ContentModel.create(input);
}

export async function listContent(
  query: FilterQuery<ContentDocument>
): Promise<any[] | LeanDocument<any>[]> {
  return ContentModel.find(query).lean();
}
