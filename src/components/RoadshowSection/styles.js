import styled from 'styled-components'

export const SectionWrapper = styled.section`
  width: 100%;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  @media only screen and (max-width: 37.5em) {
    width: 100%;
  }
`
export const Heading = styled.h2`
  padding: 2rem 0;
  font-size: 2.9rem;
  font-family: light;
  color: #2c3738;
`
export const SliderBtnsWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const SliderBtn = styled.a`
  margin: 1rem;
  padding: 0 1.5rem;
  display: inline-block;
  width: 13rem;
  height: 5rem;
  background: #fff;
  cursor: pointer;
  text-align: center;
  line-height: 5rem;
  font-size: 1.2rem;
  font-family: bold;
  color: #7f8d8f;
  box-shadow: 0px 5px 11px 0px rgba(54, 116, 173, 0.11);
  border-radius: 6px;
  transition: 0.38s ease-in-out;

  &:hover {
    color: #2c3738;
    box-shadow: 0px 5px 11px 0px rgba(103, 211, 242, 0.29);
  }
`

export const SliderElementWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    margin: 2rem 0;
  }
`
export const SliderCalendar = styled.div`
  margin-right: 2rem;
  padding: 2rem 1rem 1.5rem 1rem;
  width: 16.5rem;
  height: 17rem;
  text-align: center;
  color: #fff;
  border-radius: 6px;
  background: #67d3f2;
  box-shadow: 0px 5px 11px 0px rgba(103, 211, 242, 0.47);
  transition: 0.38s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SiderContentWrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem 1rem 2rem;
  background: #fff;
  box-shadow: 0px 5px 11px 0px rgba(103, 211, 242, 0.29);
  border-radius: 6px;
  min-height: 17rem;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 37.5em) {
    width: 74%;
  }
`
export const SliderTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.7rem;
  font-family: regular;
  color: #161b1c;
  margin-bottom: 1.5rem;
`
export const Text = styled.p`
  width: 100%;
  margin-bottom: auto;
  @media only screen and (max-width: 37.5em) {
    margin-bottom: 2rem;
  }
`
export const BotContainer = styled.div`
  display: flex;
  align-items: center;
`

export const EventBtn = styled.a`
  margin: 0 0 5px 0;
  padding: 0 1.2rem;
  border-radius: 3px;
  border: 1px solid transparent;
  box-shadow: 0px 5px 5px 0px rgba(103, 211, 242, 0.29);
  color: #fff;
  display: inline-block;
  line-height: 3.4rem;
  font-size: 1rem;
  background: #67d3f2;
  text-decoration: none;
  transition: 0.38s ease-in-out;
`
export const AddressContainer = styled.div`
  margin: 0 0 0 1rem;
  font-size: 1.2rem;
  font-weight: light;
  color: #94a4a6;
`
