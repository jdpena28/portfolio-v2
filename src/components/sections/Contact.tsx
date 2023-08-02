'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema, ContactSchemaType } from '@/schema';
import { Input } from '../form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema),
  });

  const submitInquiries = (data: ContactSchemaType) => {
    alert(JSON.stringify(data));
  };

  return (
    <section id="contact">
      <div className="flex flex-1 flex-col gap-3 lg:flex-row">
        <div className="w-full flex-[.4] space-y-5 lg:space-y-14">
          <h3 className="leading-normal">
            Let&apos;s
            <br />
            Work
            <br />
            Together
          </h3>
          <div>
            <p className="heading font-medium">phone</p>
            <p className="font-canela font-thin">+639468083171</p>
          </div>
          <div>
            <p className="heading font-medium">email</p>
            <Link
              href="mailto:johnhenrich1128@gmail.com"
              className="font-canela font-thin">
              johnhenrich1128@gmail.com
            </Link>
          </div>
        </div>
        <form
          className="flex w-full flex-[.6] flex-col justify-between gap-y-4"
          onSubmit={handleSubmit(submitInquiries)}>
          <Input
            id="email"
            type="email"
            label="Email"
            isRequired
            register={register}
            errors={errors}
          />
          <Input
            id="name"
            type="text"
            label="Name"
            register={register}
            errors={errors}
          />
          <Input
            id="message"
            type="textarea"
            label="Message"
            isRequired
            register={register}
            errors={errors}
          />
          <button
            type="submit"
            className="w-max rounded-full border-2 border-primary px-12 py-2 font-apercu font-medium uppercase">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
