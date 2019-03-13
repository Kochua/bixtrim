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
export const FAQWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  align-items: flex-start;
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`
export const AccordionsWrapper = styled.div`
  flex: 0 0 47%;
  padding: 0;
  box-shadow: 0px 5px 17px 0px rgba(54, 116, 173, 0.17);
  border-radius: 5px;
  background: #fff;
`

export const AccordionTop = styled.div`
  padding: 0 2.5rem;
  width: 100%;
  background: ${({ active }) => (active ? '#e9f5f8' : '#fff')};
  color: ${({ active }) => (active ? '#3069a5' : '#2c3738')};
  font-size: 1.2rem;
  height: 7rem;
  font-family: regular;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background: #e9f5f8;
    color: #3069a5;
  }
  display: flex;
  align-items: center;
`
export const AccordionInner = styled.div`
  padding: 0 2.5rem;
  font-size: 1.2rem;
  font-family: light;
  line-height: 7rem;
  color: #6f8ba4;
  overflow: hidden;
  transition: all 0.5s;
  max-height: ${({ open }) => (open ? '10rem' : '0rem')};
`
export const Num = styled.span`
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
  background: #67d3f2;
  transition: 0.3s ease-in-out;
  font-size: 12px;
  font-family: regular;
  color: #fff;
  margin-right: 1rem;
`
export const AccordionWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: block;
  border-bottom: 1px solid #d1e5eb;
  background: #fff;
  position: relative;
  transition: 0.38s ease-in-out;

  &:hover ${Num} {
    background: #fff;
    color: #3069a5;
  }
`
