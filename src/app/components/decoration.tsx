import React, { memo, useMemo } from 'react'
import Docker from '../icons/docker'
import ReactLogo from '../icons/react'
import TypescriptLogo from '../icons/typescript'
import NextLogo from '../icons/nextlogo'
import TailwindLogo from '../icons/tailwind'
import NodeLogo from '../icons/node'

const COMPONENTS = [Docker, ReactLogo, TypescriptLogo, NextLogo, TailwindLogo, NodeLogo];

function Decoration() {
  return (
    <div>
      {COMPONENTS.map((Component, index) => (
        <RandomLevel key={index} component={Component} />
      ))}
    </div>
  )
}

export default Decoration

const randomLevel = Math.floor(Math.random() * 50);
const array = Array.from({ length: randomLevel })

const RandomLevel = memo(({ component: Component }:
  { component: React.FC }
) => {

  return array.map((_, index) => (
    <Component key={index} />
  ));
});