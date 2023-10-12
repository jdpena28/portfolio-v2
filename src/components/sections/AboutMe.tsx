'use client';

import { Tooltip } from 'react-tooltip';

import { TECH_STACKS } from '@/constant';

const AboutMe = () => {
  return (
    <section id="about">
      <div className="gap-14 space-y-5 lg:grid lg:grid-cols-12 lg:space-y-14">
        <div className="w-max space-y-3">
          <div className="h-[3px] w-1/2 bg-primary" />
          <h3 className="text-left">
            About
            <br />
            Me
          </h3>
        </div>
        <p className="col-span-8 col-start-4 row-start-2 w-full max-w-xl text-justify">
          Graduate of{' '}
          <a className="external-link" href="https://www.bpsu.edu.ph/">
            Bataan Peninsula State University
          </a>{' '}
          with a degree of Bachelor of Science in Computer Science major in
          Network and Data Communication. I took Technical Vocational Strand on
          my Senior High School days at{' '}
          <a
            className="external-link"
            href="https://heroes1979.edu.ph/about-us/">
            Bataan Heroes College
          </a>{' '}
          with specialization in Computer Programming. I am a self-taught
          developer with over a year experience in development and design.
          Mainly focus on javascript application. Eager to learn new
          technologies and skills. Currently learning .Net and Rust programming
          for more expanded knowledge.
        </p>
        <h3 className="col-span-4  row-start-3">Tech Stack</h3>
        <div className="col-span-9 col-start-2 row-start-4 flex flex-wrap items-center justify-around gap-6 lg:gap-5">
          {
            // render svg from props
            TECH_STACKS.map((i) => {
              return (
                <div
                  data-tooltip-id="tooltip-stacks"
                  data-tooltip-content={i.name}
                  data-tooltip-place="top"
                  key={i.name}>
                  {i.src}
                </div>
              );
            })
          }
        </div>
      </div>
      <Tooltip id="tooltip-stacks" />
    </section>
  );
};

export default AboutMe;
