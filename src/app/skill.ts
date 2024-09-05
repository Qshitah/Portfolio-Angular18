import { SkillItem } from "./skill-item";

export interface Skill {
  name: string;
  description: string;
  items: Array<SkillItem>;
}
