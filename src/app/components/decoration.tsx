import React, { ForwardRefExoticComponent, MemoExoticComponent, RefAttributes, cloneElement, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Docker from '../icons/docker'
import ReactLogo from '../icons/react'
import TypescriptLogo from '../icons/typescript'
import NextLogo from '../icons/nextlogo'
import TailwindLogo from '../icons/tailwind'
import NodeLogo from '../icons/node'
import { IIconProps } from '../icons/interface'
import { stateStorage, useTriggerState } from 'react-trigger-state'

const COMPONENTS = [Docker, ReactLogo, TypescriptLogo, NextLogo, TailwindLogo, NodeLogo];
const MAX_HEIGHT = 95;

function Decoration() {
  const [isMounted, setIsMounted] = useState(false);
  const [windowDidResize] = useTriggerState({ name: 'window_did_resize' });

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
  }, [isMounted, windowDidResize]);

  const entries = useMemo(() => Object.entries(positions || {}), [positions]);

  useEffect(() => {
    const handler = () => {
      stateStorage.set("window_did_resize", new Date());
    }

    window.addEventListener('resize', handler);

    return () => window.removeEventListener('resize', handler);
  }, []);

  if (!isMounted) return null;

  return (
    entries.map(([position, components], key) => (
      components.map((component, index) => (
        <RandomLevel
          width={position}
          key={index}
          axis={{ x: index, y: key }}
          component={COMPONENTS[component]}
        />
      ))
    ))
  )
}

export default Decoration

const RandomLevel = memo(({ component: Component,
  width,
  axis
}:
  {
    component: MemoExoticComponent<ForwardRefExoticComponent<IIconProps & RefAttributes<SVGSVGElement | null>>>;
    width: string,
    axis: { x: number, y: number }
  }
) => {
  const getPosition = useCallback(() => {
    // gets the max top based on the axis
    const maxTop = MAX_HEIGHT / (axis.x + 1)

    // if top is 100, min is going to be 75, if top is 75, min is going to be 50, and so on 
    const minTop = maxTop - 25;

    const randomValue = Math.floor(Math.random() * (maxTop - minTop + 1) + minTop);

    return randomValue;
  }, []);

  const top = useMemo(() => getPosition(), [getPosition]);

  return cloneElement(<Component style={{}} />, {
    style: {
      opacity: 0.25,
      position: 'fixed',
      top: `${top}vh`,
      left: width,
      transform: `rotate(${Math.random() * 360}deg)`,
    }
  });
});