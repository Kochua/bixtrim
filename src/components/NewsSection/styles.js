import styled from 'styled-components'
import { Link } from "react-router-dom";

export const SectionWrapper = styled.section`
  margin: 5rem auto;
  padding: 0;
  width: 100%;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Heading = styled.h2`
  margin: 0;
  padding: 2rem 0;
  float: left;
  font-size: 2.9rem;
  font-family: light;
  color: #2c3738;
`
export const Btn = styled.a`
  margin: 0;
  box-shadow: 3.536px 3.536px 11px 0px rgba(48, 105, 165, 0.14);
  font-size: 1.2rem;
  font-family: bold;
  color: #768da6;
  padding: 0 3rem;
  text-align: center;
  line-height: 4.6rem;
  border-radius: 2.3rem;
  display: inline-block;
  text-decoration: none;
  outline: none;
  transition: 0.38s ease-in-out;
  align-self: baseline;
`
export const NewsWrapper = styled.div`
  height: 31rem;
  margin: 0 0 2rem 0;
  width: 100%;
`
export const NewsTop = styled(Link)`
  width: 100%;
  height: 18.5rem;
  position: relative;
`
export const Bg = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(22, 27, 28, 0.38);
  transition: 0.38s ease-in-out;
`
export const NewsBottom = styled.div`
  margin: -4rem auto 0 auto;
  position: relative;
  padding: 4rem 3rem;
  width: 80%;
  height: 15.5rem;
  background: #fff;
  border-bottom-right-radius: 2.2rem;
  box-shadow: 3.536px 5px 11px 0px rgba(98, 130, 165, 0.38);
  transition: 0.38s ease-in-out;
  overflow: hidden;
  z-index: 2;
  @media only screen and (max-width: 37.5em) {
    margin: 4rem auto 0 auto;
  }
  
`
export const Text = styled.a`
  font-size: 1.4rem;
  line-height: 2.2rem;
  font-family: bold;
  color: #2c3738;
  display: block;
  text-decoration: none;
`
export const Dotts = styled.hr`
  margin: 5rem auto 3rem auto;
  padding: 0;
  display: block;
  width: 100%;
  border: 1px dashed #bcc9d3;
  height: 1px;
  background: transparent;
  clear: both;
`
