import styled from "@emotion/styled";
import { ThreeDots } from "react-loader-spinner";

export const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const StyledLoad = styled(ThreeDots)`
  position: absolute;
  bottom: 0;
  left: 50%;
`;
