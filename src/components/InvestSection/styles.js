import styled from 'styled-components'

export const SectionWrapper = styled.section`
  padding: 3rem 0;
  width: 100%;
  position: relative;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`
export const ContentWrapper = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`
export const ContentContainer = styled.div`
  flex: 0 0 50%;

  @media only screen and (max-width: 37.5em) {
    margin-bottom: 1.5rem;
    order: ${({ order }) => order};
  }
`

export const ImgContainer = styled.div`
  margin: 0 auto;
  display: block;
  background: url(${({ img }) => img}) no-repeat center center;
  background-size: contain;
  width: 24rem;
  height: 38rem;
  @media only screen and (max-width: 37.5em) {
    height: 32rem;
    margin-bottom: 2rem;
  }
`
export const PrimaryHeading = styled.h2`
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 2.4rem;
  font-family: bold;
  color: #161b1c;
  line-height: 3.5rem;
`
export const SecondaryHeading = styled.h3`
  margin: 2rem 0 0 0;
  padding: 0;
  width: 100%;
  font-size: 1.8rem;
  font-family: regular;
  color: #2c3738;
  line-height: 2.9rem;
`
export const TextContainer = styled.div`
  margin: 2rem 0 0 0;
  font-size: 1.4rem;
  font-family: light;
  color: #6a7778;
  line-height: 2.9rem;
`
export const Text = styled.p`
  margin: 0 0 1rem 0;
`
