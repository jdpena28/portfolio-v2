/* eslint-disable import/no-unresolved */
import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister } from 'react-hook-form/dist/types';
import { PROJECTS } from '@/constant';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { ContactSchemaType } from '@/schema';

export type NavLinksType = {
  name: string;
  url: string;
  description: string;
};

export type ProjectType = (typeof PROJECTS)[0];

export interface InputProps {
  label: string;
  id: keyof ContactSchemaType;
  type: HTMLInputTypeAttribute | 'textarea';
  isRequired?: boolean;
  register: UseFormRegister<ContactSchemaType>;
  errors: FieldErrors<ContactSchemaType>;
}
