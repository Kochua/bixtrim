import styled from 'styled-components'

export const Btn = styled.a`
  background: #fff;
  color: #4c9fcd;
  border: 2px solid transparent;
  padding: 0 3rem;
  text-align: center;
  font-size: 1.4rem;
  font-family: bold;
  line-height: 4.5rem;
  border-radius: 2.3rem;
  display: inline-block;
  text-decoration: none;
  outline: none;
  transition: 0.38s ease-in-out;

  &:hover {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
  }
`
export const WrapperModal = styled.div`
  width: 55rem;
`

export const Header = styled.div`
  padding: 0 0 0 2rem;
  width: 100%;
  height: 4.4rem;
  line-height: 4.4rem;
  font-size: 1.5rem;
  color: #fff;
  background: #29a4d9;
`

export const Form = styled.form`
  width: 75%;
  margin: 0 auto;
  padding: 3rem 0 1rem;
  display: flex;
  flex-direction: column;
`
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.5rem;
`
export const Input = styled.input`
  padding: 1rem 1.5rem;
  width: 100%;
`
export const SubmitBtn = styled.button`
  margin-top: 1rem;
  padding: 0;
  width: 12rem;
  height: 5rem;
  line-height: 5rem;
  color: #fff;
  border-radius: 4px;
  border: none;
  border-bottom: 2px solid #116d94;
  text-align: center;
  cursor: pointer;
  background: #29a4d9;
  font-weight: bold;
  font-size: 1.4rem;
  transition: 0.47s ease-in-out;

  &:hover {
    background: #116d94;
  }
`
