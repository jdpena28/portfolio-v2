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
      <div className="flex flex-1">
        <div className="w-full flex-[.4] space-y-14">
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
      {/* Backdrop */}
      <div className="absolute -right-1/4 bottom-0 top-0 my-auto h-max rotate-12">
        <div className="float-animate h-[400px] w-[400px] rounded-full border-4 border-blue-500 bg-[#2548FF66]/50 blur-md" />
        <div className="float-animate2 -mt-48 h-[400px] w-[400px] rounded-full border-4 border-red-500 bg-[#FF2E0066]/50 blur-md" />
        <div />
      </div>
    </section>
  );
};

export default Contact;
