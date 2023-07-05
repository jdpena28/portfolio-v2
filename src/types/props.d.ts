import { PROJECTS } from '@/constant';

export type NavLinksType = {
  name: string;
  url: string;
  description: string;
};

export type ProjectType = (typeof PROJECTS)[0];
