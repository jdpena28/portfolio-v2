import * as zod from 'zod';

export const ContactSchema = zod.object({
  email: zod.string().email().min(1, 'Email is required'),
  name: zod.string().optional(),
  message: zod
    .string()
    .min(1, 'Message is required')
    .max(500, 'Message is too long'),
});

export type ContactSchemaType = zod.infer<typeof ContactSchema>;
