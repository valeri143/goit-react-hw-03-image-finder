import { Formik } from "formik"
import { StyledHeader, StyledForm, StyledInput, StyledButton, StyledIcon } from "./Searchbar.styled"

export const Searchbar = ({onSubmit}) =>{
    return (
    <>
    <StyledHeader >
    <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
  <StyledForm >
    <StyledButton type="submit">
      <span ><StyledIcon/></span>
    </StyledButton>
    <StyledInput
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </StyledForm>
  </Formik>
</StyledHeader>
    </>
    )
}