import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <section id="home">
      <div className="flex w-full items-center justify-around">
        <div className="space-y-5">
          <h2 className="font-canela text-lg font-medium">
            A Full Stack Developer
          </h2>
          <h1 className="gradient-animate font-bold">
            John Henrich <br /> Dela Pena
          </h1>
          <p className="max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            nesciunt animi quibusdam veritatis aliquid. Ad tenetur quo voluptate
            ab minus aspernatur culpa voluptas autem obcaecati maxime fuga
            exercitationem, iste, cupiditate incidunt nemo.
          </p>
          <Link
            href="#contacts"
            className="relative flex w-max items-center justify-center">
            <svg
              width="221"
              height="191"
              viewBox="0 0 221 191"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M194.204 35.3682C197.559 40.1055 198.459 46.2888 197.156 53.4635C195.853 60.64 192.348 68.7755 186.941 77.3632C176.128 94.537 157.747 113.45 134.355 130.013C110.964 146.577 87.0204 157.633 67.2301 162.13C57.3341 164.378 48.4966 164.982 41.2944 163.828C34.0941 162.675 28.5609 159.772 25.2064 155.035C21.8519 150.297 20.9514 144.114 22.2546 136.939C23.5582 129.763 27.0624 121.627 32.4697 113.04C43.2833 95.8658 61.6637 76.953 85.0554 60.3896C108.447 43.8261 132.39 32.7696 152.181 28.273C162.077 26.0245 170.914 25.421 178.116 26.5746C185.317 27.728 190.85 30.6309 194.204 35.3682Z"
                stroke="black"
                strokeWidth="0.798204"
              />
              <path
                d="M217.065 85.5679C217.516 91.3552 215.119 97.1256 210.321 102.617C205.523 108.11 198.343 113.298 189.298 117.899C171.208 127.099 145.731 133.912 117.156 136.139C88.5813 138.366 62.3562 135.582 43.0601 129.296C33.4111 126.152 25.5144 122.139 19.9226 117.455C14.3323 112.773 11.0701 107.444 10.6191 101.657C10.1681 95.8695 12.5652 90.0991 17.3627 84.6074C22.1614 79.1143 29.3411 73.9263 38.3865 69.3258C56.4757 60.1256 81.9528 53.3123 110.528 51.0854C139.103 48.8585 165.328 51.6425 184.624 57.9292C194.273 61.0728 202.17 65.0859 207.761 69.7692C213.352 74.4513 216.614 79.7807 217.065 85.5679Z"
                stroke="black"
                strokeWidth="0.798204"
              />
            </svg>
            <span className="heading absolute font-medium">Contact Me</span>
          </Link>
        </div>
        <div className="space-y-10">
          <Image
            className="rounded-md"
            src="/profile.png"
            alt="Profile Photo"
            width={356}
            height={513}
          />
          <div>
            <Link href="#contact">
              <p className="text-right">
                Want to see my projects?{' '}
                <svg
                  className="bounce-left-animate ml-6 inline-block"
                  width="44"
                  height="8"
                  viewBox="0 0 44 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M43.3536 4.35355C43.5488 4.15829 43.5488 3.84171 43.3536 3.64645L40.1716 0.464466C39.9763 0.269204 39.6597 0.269204 39.4645 0.464466C39.2692 0.659728 39.2692 0.976311 39.4645 1.17157L42.2929 4L39.4645 6.82843C39.2692 7.02369 39.2692 7.34027 39.4645 7.53553C39.6597 7.7308 39.9763 7.7308 40.1716 7.53553L43.3536 4.35355ZM0 4.5L43 4.5V3.5L0 3.5L0 4.5Z"
                    fill="#101110"
                  />
                </svg>
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* Backdrop */}
      <div className="absolute -left-1/3 bottom-0 top-0 my-auto h-max">
        <div className="float-animate h-96 w-96 rounded-full border-4 border-blue-500 bg-[#2548FF66]/50 blur-md" />
        <div className="float-animate2 -mt-48 h-96 w-96 rounded-full border-4 border-red-500 bg-[#FF2E0066]/50 blur-md" />
        <div />
      </div>
    </section>
  );
};

export default Home;
