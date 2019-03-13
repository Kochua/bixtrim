import styled from 'styled-components'

export const ParticlesContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
  z-index: 1;
`
export const ParticlesFixedContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -10;
  top: 0;
  left: 0;
`
