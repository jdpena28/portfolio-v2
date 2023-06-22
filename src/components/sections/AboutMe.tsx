import { TECH_STACKS } from '@/constant';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="grid grid-cols-12 gap-14">
        <div className="w-max space-y-3">
          <div className="h-[3px] w-1/2 bg-primary" />
          <h3 className="text-left">
            About
            <br />
            Me
          </h3>
        </div>
        <p className="col-span-8 col-start-4 row-start-2 w-full max-w-xl text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro
          fugit consequatur atque blanditiis omnis recusandae possimus libero
          consectetur vitae excepturi quod vero deserunt dolore, doloremque ab
          voluptas voluptatem consequuntur doloribus sint laudantium, non
          eligendi et eos. Accusamus porro debitis id maxime necessitatibus
          veniam consequuntur provident tempore voluptas cum odit hic deleniti
          quos animi facilis dolore perferendis, eius voluptatum beatae
          repellendus ratione obcaecati? Fugiat aperiam aspernatur consectetur
          quis nulla ab eum deleniti sint inventore aliquam explicabo eveniet
          ipsa quibusdam nesciunt, aut ad harum consequatur, beatae dolor
          pariatur est. Distinctio assumenda id maiores iure doloribus nostrum,
          dignissimos beatae facilis recusandae.
        </p>
        <h3 className="col-span-4  row-start-3">Tech Stack</h3>
        <div className="col-span-9  col-start-2 row-start-4 flex flex-wrap items-center justify-around">
          {
            // render svg from props
            TECH_STACKS.map((i) => {
              return <div className="h-16 w-16">{i.src}</div>;
            })
          }
        </div>
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

export default AboutMe;
