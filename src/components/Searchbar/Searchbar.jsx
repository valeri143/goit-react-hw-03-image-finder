import { Formik, Form, Field  } from "formik"
import styled from "@emotion/styled";

const Input = styled(Field)`
margin-left: 20px;
`


export const Searchbar = ({onSubmit}) =>{
    return (
    <>
    <header >
    <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
  <Form >
    <button type="submit">
      <span >Search</span>
    </button>
    <Input
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </Form>
  </Formik>
</header>
    </>
    )
}