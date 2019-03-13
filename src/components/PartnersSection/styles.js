import styled from 'styled-components'

export const SectionWrapper = styled.section`
  padding: 3rem 0;
  width: 100%;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`
export const Heading = styled.h2`
  margin: 0;
  padding: 2rem 0;
  font-size: 2.9rem;
  font-family: light;
  color: #2c3738;
`
export const SliderItem = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  cursor: pointer;
  border-radius: 50%;
  width: 16rem !important;
  height: 16rem !important;
  box-shadow: 0px 0px 27px 0px rgba(48, 132, 184, 0.14);
  overflow: hidden;
  display: flex;
`
export const PartnerName = styled.a`
  padding: 0;
  text-align: center;
  font-size: 1.2rem;
  font-family: regular;
  color: #161b1c;
  text-decoration: unset;
  text-transform: uppercase;
  transition: 0.38s ease-in-out;
`
export const Line = styled.div`
  width: 2.2rem;
  height: 3px;
  border-radius: 1.5px;
  background-color: #67d3f2;
  margin: 1rem 0;
`
//advisors
export const AdvisorHeading = styled.h2`
  margin-top: 5rem;
  padding: 2rem 0;
  font-size: 3rem;
  font-family: light;
  color: #2c3738;
`
export const AdvisorSection = styled.section`
  margin: 1rem auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const AdvisorImg = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 100%;
  display: block;
  height: 18rem;
  border-bottom-right-radius: 9rem;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: 0.38s ease-in-out;

  @media only screen and (max-width: 56.25em) {
    filter: grayscale(0);
  }

  &:hover {
    filter: grayscale(0%);
  }
`

export const AdvisorItemContainer = styled.div`
  margin: 1.5rem;
  padding: 0;
  order: 1;
  width: 19rem;
  display: inline-block;
  border-radius: 1.1rem;
  box-shadow: 0px 5px 11px 0px rgba(20, 3, 47, 0.11);
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: 0.38s ease-in-out;
  &:hover ${AdvisorImg} {
    filter: grayscale(0%);
    box-shadow: 0px 5px 1.5rem 0px rgba(20, 3, 47, 0.3);
  }
`
export const In = styled.div`
  position: absolute;
  top: 16rem;
  right: 1rem;
  text-decoration: none;
`
export const AdvisorFullName = styled.span`
  margin: 2rem 0 1rem 1rem;
  padding: 0;
  display: block;
  width: 100%;
  font-size: 1.6rem;
  font-family: bold;
  color: #292d2e;
`
export const AdvisorName = styled.span`
  margin: 0 0 2rem 1.5rem;
  font-size: 1.2rem;
  color: #979d9e;
  display: block;
  width: 100%;
`
