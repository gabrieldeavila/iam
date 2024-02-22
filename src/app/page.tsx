'use client';

import NextImage from '@/components/NextImage';
import Docker from './icons/docker';
import NextLogo from './icons/nextlogo';
import ReactLogo from './icons/react';
import TailwindLogo from './icons/tailwind';
import TypescriptLogo from './icons/typescript';
import NodeLogo from './icons/node';
import Decoration from './components/decoration';


export default function HomePage() {
  return (
    <main>
      <Decoration />

      <section className='bg-dark text-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='max-w-4xl text-6xl bg-dark	'>
            i create web experiences that make people feel deeply connected.
          </h1>

          <div className='flex items-center gap-10 mt-10'>
            <div
              className='flex items-center justify-center'
            >
              <div
                className='rounded-full overflow-hidden border-4 border-primary-500'
              >
                <NextImage
                  useSkeleton
                  className='w-32 md:w-40'
                  src='/images/me.jpeg'
                  width='180'
                  height='180'
                  alt='Icon'
                />
              </div>

            </div>

            <div className='flex flex-col bg-dark items-start gap-2'>
              <h3> hey there folks!</h3>
              <p className='text-left'>
                I am Gabriel Ávila, a <strong>front-end web developer</strong> dedicated to fostering creativity on the web. I am always looking for new challenges and opportunities to learn and grow. I am currently working with React, React Native, Typescript, Next.js, and Node.js.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='min-h-screen p-10 flex flex-col justify-center py-12 text-slate-200 bg-zinc-800 z-10 relative'>
        <div>
          <div className='w-2/5'>
            <p className='italic font-extralight opacity-25'>
              Reading Experience
            </p>
            <h2 className='text-4xl mt-3'>
              Dissolutus
            </h2>
            <p className='mt-7'>
              A web application for Enhanced Reading and Writing experiences
            </p>
          </div>
          <div>
            <NextImage
              useSkeleton
              className='w-32 md:w-40'
              src='/images/dissolutus.png'
              width='500'
              height='500'
              alt='Icon'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
