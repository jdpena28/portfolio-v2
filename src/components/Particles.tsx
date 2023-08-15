'use client';

import { loadFull } from 'tsparticles';
import Particles from 'react-particles';
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';

export default function BGParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles url="/particles.json" id="bg-particles" init={particlesInit} />
  );
}
