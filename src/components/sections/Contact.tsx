import Link from 'next/link';
import { Input } from '../form';

const Contact = () => {
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
        <form className="flex w-full flex-[.6] flex-col justify-between gap-y-4">
          <Input id="email" type="email" label="Email" isRequired />
          <Input id="name" type="text" label="Name" />
          <Input id="message" type="textarea" label="Message" isRequired />
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
