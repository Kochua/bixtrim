import styled from 'styled-components'

export const SectionWrapper = styled.section`
  margin: 5rem auto;
  padding: 0;
  width: 100%;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`
export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Heading = styled.h2`
  margin: 0;
  padding: 2rem 0;
  float: left;
  font-size: 2.9rem;
  font-family: light;
  color: #2c3738;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3rem auto 0 auto;
  padding: 0 1rem;
  width: 100%;
  overflow: hidden;
`
export const PressItemContainer = styled.a`
  display: flex;
  align-items: center;
  margin: 0 2rem 2rem 0;
  padding: 1rem;
  background: #fff;
  box-shadow: 0px 5px 11px 0px rgba(98, 130, 165, 0.11);
  border-radius: 4px;
  height: 9rem;
  transition: 0.38s ease-in-out;

  &:hover {
    box-shadow: 0px 5px 11px 0px rgba(98, 130, 165, 0.29);
  }
`
