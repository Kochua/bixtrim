import styled from 'styled-components'

export const SectionWrapper = styled.section`
  width: 100%;
  padding: 5rem 0;
  position: relative;
  color: #fff;
  background-image: -moz-linear-gradient(135deg, #3069a5 0%, #67d3f2 100%);
  background-image: -webkit-linear-gradient(135deg, #3069a5 0%, #67d3f2 100%);
`

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 8rem;

  @media only screen and (max-width: 56.25em) {
    margin-bottom: 4rem;
  }
`

export const Heading = styled.h2`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
  font-size: 2.9rem;
  font-family: light;
  color: #f9f9f9;
`

export const Line = styled.div`
  width: 4rem;
  height: 2px;
  background: #fff;
  margin: 4rem 0;
`
export const Text = styled.p`
  width: 100%;
  font-size: 1.2rem;
  font-family: light;
  color: #f9f9f9;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 85%;
  display: flex;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`

export const LeftSide = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 56.25em) {
    order: ${({ order }) => order}
    flex:1
  }
`
export const TokenImg = styled.img`
  min-width: 100%;
  width: 100%;
  display: block;
  height: auto;

  @media only screen and (max-width: 56.25em) {
    margin-bottom: ${({ mb }) => mb && '3rem'};
  }
`
export const ContentTitle = styled.h3`
  font-size: 1.6rem;
  font-family: regular;
  color: #ececed;
`
export const MethodsWrapper = styled.div`
  display: flex;
  margin: 4rem 0;
  padding-right: 2rem;
`
export const MethodTitle = styled.div`
  margin-right: 5rem;
  font-size: 1.4rem;
  font-family: bold;
  color: #fff;
  align-self: flex-start;
`
export const Method = styled.img`
  margin: 0 1rem;
  transition: 0.38s ease-in-out;
`
export const CapsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 4rem;
  @media only screen and (max-width: 56.25em) {
    align-items: stretch;
    padding-right: 0;
  }
`
export const CapsItem = styled.div`
  margin: 0;
  padding: 1.5rem;
  flex: 1;
  background-image: -moz-linear-gradient(
    0deg,
    rgb(215, 223, 227) 0%,
    rgb(255, 254, 254) 100%
  );
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(215, 223, 227) 0%,
    rgb(255, 254, 254) 100%
  );
  background-image: -ms-linear-gradient(
    0deg,
    rgb(215, 223, 227) 0%,
    rgb(255, 254, 254) 100%
  );
  text-align: left;
  display: flex;
  flex-direction: column;
`
export const CapsTop = styled.span`
  font-size: 1.2rem;
  font-family: regular;
  color: #6b7778;
`
export const CapsBot = styled.span`
  margin: 1.5rem 0 0 0;
  font-size: 1.8rem;
  font-family: bold;
  color: #3e494a;
`
export const InfoList = styled.div`
  margin: 4rem auto 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const InfoItem = styled.div`
  margin: 0 0 1rem 0;
  padding: 0;
  width: 100%;
  font-size: 1.2rem;
  font-family: light;
  color: #fff !important;
  transition: 0.38s ease-in-out;
`
