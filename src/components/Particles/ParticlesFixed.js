import React from 'react'
import Particles from 'react-particles-js'
import { ParticlesFixedContainer } from './styles'

const ParticlesFixed = () => {
  return (
    <ParticlesFixedContainer>
      <Particles
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: '#000000'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.1,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.15,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 80,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#000000',
              opacity: 0.15,
              width: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          retina_detect: true
        }}
      />
    </ParticlesFixedContainer>
  )
}

export default ParticlesFixed
