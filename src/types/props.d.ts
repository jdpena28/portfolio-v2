import { HTMLInputTypeAttribute } from 'react';
import { PROJECTS } from '@/constant';

export type NavLinksType = {
  name: string;
  url: string;
  description: string;
};

export type ProjectType = (typeof PROJECTS)[0];

export interface InputProps {
  label: string;
  id: string;
  type: HTMLInputTypeAttribute | 'textarea';
  isRequired?: boolean;
}
