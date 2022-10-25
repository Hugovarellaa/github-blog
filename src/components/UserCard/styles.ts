import { styled } from "../../styles"

export const UserCardContainer = styled("div", {
  backgroundColor: "$baseProfile",
  width: "100%",
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  borderRadius: "10px",
  border: "1px solid $baseProfile",
  marginTop: "-88px",
})

export const UserCardContent = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",

  p: {
    marginTop: "8px",
    marginBottom: "24px",
  },
})

export const Avatar = styled("img", {
  width: "148px",
  height: "148px",
  borderRadius: "8px",
  marginLeft: "8px",
  border: "1px solid $baseProfile",
})

export const UserCardNameContainer = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: " center",
  justifyContent: "space-between",

  a: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "$blue",
    textTransform: "uppercase",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "12px",
  },
})

export const UserCardInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "24px",

  span: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
})
