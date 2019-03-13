import styled from 'styled-components'

export const SectionWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  color: #fff;
  background-image: -moz-linear-gradient(
    62deg,
    rgb(42, 4, 58) 0%,
    rgb(28, 15, 127) 100%
  );
  background-image: -webkit-linear-gradient(
    62deg,
    rgb(42, 4, 58) 0%,
    rgb(28, 15, 127) 100%
  );
`

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PrimaryHeading = styled.h2`
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 29px;
  font-family: light;
  color: #f9f9f9;
`
export const Line = styled.div`
  margin: 30px auto;
  width: 40px;
  height: 2px;
  background: #fff;
`
export const Text = styled.p`
  margin: 0 auto;
  width: 45%;
  font-size: 1.2rem;
  font-family: light;
  color: #f9f9f9;
  text-align: center;
  line-height: 2.2rem;

  @media only screen and (max-width: 37.5em) {
    width: 95%;
  }
`
export const Slider = styled.div`
  margin: 2rem 4rem;
  padding: 2rem 0 4rem 0;
  width: 40%;
  transition: 0.38s ease-in-out;
  overflow-y: hidden;
  overflow-x: scroll;
  @media only screen and (max-width: 56.25em) {
    width: 30%;
  }
  @media only screen and (max-width: 37.5em) {
    width: 13%;
  }

  &::-webkit-scrollbar {
    height: 1rem;
  }
  &::-webkit-scrollbar-track {
    background: #1c0541;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #4e0fc7;
    border-radius: 3px;
  }
`
export const ArrowContainer = styled.div`
  cursor: pointer;
  font-size: 3.5rem;
  opacity: 0.74;
  color: #fff;
  transition: 0.38s ease-in-out;
`
export const Btn = styled.a`
  font-size: 1.2rem;
  font-family: bold;
  color: #270648;
  display: block;
  width: 12.5rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  cursor: pointer;
  background: #fff;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0px 5px 15px 0px rgba(20, 3, 47, 0.65);
  transition: 0.38s ease-in-out;

  &:hover {
    background: #4e0fc7;
    color: #fff;
  }
`
