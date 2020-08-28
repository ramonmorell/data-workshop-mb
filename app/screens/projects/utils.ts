import { Project } from "../../types/projects";

export const mapProject = (project: Project): Project => {
  return {
    ...project,
    id: project.id.toString(),
  };
};
