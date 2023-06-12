import styled from "@emotion/styled";

export const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "static",
    backgroundColor: "#fff",
    padding: "0px",
    borderRadius: "4px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
    maxWidth: "60vw",
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "90px"
  },
};

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;