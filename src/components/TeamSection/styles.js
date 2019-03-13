import styled from 'styled-components'

export const SectionWrapper = styled.section`
  padding: 5rem 0;
  width: 100%;
  position: relative;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;

  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
`

export const HeaderWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`
export const PrimaryHeading = styled.h2`
  font-size: 2.9rem;
  font-family: light;
  color: #2c3738;

  @media only screen and (max-width: 37.5em) {
    padding-left: 3rem;
  }
`
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const ContentItemWrapper = styled.div`
  order: 1;
  min-width: 20rem;
  width: 20rem;
  height: 19rem;
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0px 5px 17px 0px rgba(15, 42, 70, 0.22);
  transition: 0.38s ease-in-out;
  margin: 2rem;
`
export const TeamImg = styled.div`
  background-image: url("${({ img }) => img}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  transition: 0.38s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }

  @media only screen and (max-width: 56.25em) {
    filter: grayscale(0);
  }
`

export const TeamInfo = styled.div`
  position: absolute;
  padding: 1rem;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background: rgba(0, 0, 0, 0.65);
  overflow: hidden;
  transition: 0.38s ease-in-out;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
`
export const TeamName = styled.span`
  font-size: 1.4rem;
  font-family: bold;
  color: #fff;
  width: 100%;
  transition: 0.38s ease-in-out;
  margin-bottom: 0.35rem;
  text-transform: capitalize;
`
export const TeamPoisition = styled.span`
  margin: 1px 0 0 0;
  font-size: 0.9rem;
  font-family: regular;
  color: #67d3f2;
  transition: 0.38s ease-in-out;
`

//DIALOG

export const DialogWrapper = styled.div`
  min-height: 50rem;
  background: #fff;
  box-shadow: 0px 5px 17px 0px rgba(1, 8, 15, 0.92);
  display: flex;
`

export const DialogLeft = styled.div`
  width: 35%;
  height: 100%;
  min-height: 100%;
`
export const DialogImg = styled.img`
  min-width: 100% !important;
  min-height: 100% !important;
  width: 100%;
  transition: 0.38s ease-in-out;
`
export const DialogRight = styled.div`
  flex: 1;
  padding: 5rem;
  display: flex;
  flex-direction: column;
`
export const DialogPosition = styled.div`
  font-size: 1.6rem;
  font-family: regular;
  color: #67d3f2;
  display: block;
  width: 100%;
`
export const DialogName = styled.h3`
  margin: 2.5rem 0 4rem 0;
  font-size: 3.6rem;
  font-family: bold;
  color: #18222d;
  display: block;
  width: 100%;
`
export const Description = styled.div`
  font-size: 1.4rem;
  font-family: light;
  color: #343f4a;
  line-height: 2.5rem;
`
