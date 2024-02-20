import React, { cloneElement, memo, useEffect, useMemo, useRef, useState } from 'react'
import Docker from '../icons/docker'
import ReactLogo from '../icons/react'
import TypescriptLogo from '../icons/typescript'
import NextLogo from '../icons/nextlogo'
import TailwindLogo from '../icons/tailwind'
import NodeLogo from '../icons/node'

const COMPONENTS = [Docker, ReactLogo, TypescriptLogo, NextLogo, TailwindLogo, NodeLogo];

function Decoration() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const positions = useMemo(() => {
    if (!isMounted) return null;
    const width = window.innerWidth;

    // start adding the components from the start of the screen
    // initially, the max amount of components is 3, but when it goes to the left, it will add more components
    const components = Math.floor(width / 100);
    const positions = Array.from({ length: components });
    const maxPosition = positions.length;
    const info = positions
      .reduce<{ amount: number, comPositions: Record<number, number[]> }>
      ((acc, _, index) => {
        const currWidth = 100 * (maxPosition - index);
        const randomComps = Array.from({ length: acc.amount }).map(() => {
          const randomIndex = Math.floor(Math.random() * COMPONENTS.length);
          return randomIndex;
        });

        acc.comPositions[currWidth] = randomComps;

        return acc
      }, {
        amount: 3,
        comPositions: {}
      })

    return info.comPositions;
  }, [isMounted]);

  const entries = useMemo(() => Object.entries(positions || {}), [positions]);

  if (!isMounted) return null;

  return (
    <div>
      {entries.map(([position, components], index) => (
        <div key={index} style={{ position: 'absolute', top: 0, left: position }}>
          {components.map((component, index) => (
            <RandomLevel
              width={position}
              key={index}
              component={COMPONENTS[component]} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Decoration

const RandomLevel = memo(({ component: Component,
  width
}:
  {
    component: React.FC,
    width: string
  }
) => {
  const ref = useRef<Element>(null);

  return cloneElement(<Component />, {
    ref: ()=>console.log("hmm"),
    style: {
      position: 'absolute',
      top: `${Math.random() * 100}vh`,
      left: width,
      transform: `rotate(${Math.random() * 360}deg)`,
    }
  });
});