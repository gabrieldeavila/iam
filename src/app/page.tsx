'use client';

import Head from 'next/head';


/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <section className='bg-dark text-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1 className='max-w-4xl text-6xl	'>
            i create web experiences that make people feel deeply connected.
          </h1>

          <div>
            <div>
              <div> img here</div>
              <div> hey there folks!</div>
              <p>
                I am Gabriel Ávila, a web developer focused on making the web a creative place. I am always looking for new challenges and opportunities to learn and grow. I am currently working with React, React Native, Typescript, Next.js, and Node.js.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
