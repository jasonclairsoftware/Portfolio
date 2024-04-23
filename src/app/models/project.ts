import { Tag } from "./tag";

export interface Project{
  id: number;
  name: string;
  summary: string;
  description: string;
  projectlink: string;
  imagelinks: string[];
  tags: Tag[];
}
