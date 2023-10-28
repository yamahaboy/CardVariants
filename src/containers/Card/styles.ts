import styled from "styled-components";

export const StyledCard = styled.div<{
  variant: "large" | "medium" | "small";
}>`
  width: ${({ variant }) =>
    variant === "large" ? "600px" : variant === "medium" ? "400px" : "300px"};
  height: ${({ variant }) =>
    variant === "large" ? "240px" : variant === "medium" ? "260px" : "120px"};
  background-color: #e9e9e9;
  border: 1px solid #808080;
  border-radius: 5px;
  margin: 3rem;
  padding: ${({ variant }) =>
    variant === "large" ? "25px" : variant === "medium" ? "15px" : "10px"};
  cursor: pointer;
`;

export const CardContainer = styled.div<{
  variant: "large" | "medium" | "small";
}>`
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === "medium" ? "column-reverse" : "row"};
  justify-content: space-between;
  margin-bottom: ${({ variant }) => (variant === "large" ? "20px" : "10px")};
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const DateNow = styled.div`
  color: #808080;
  font-size: 14px;
  & p {
    margin-bottom: 0;
  }
`;

export const CardTitle = styled.div<{
  variant: "large" | "medium" | "small";
}>`
  font-size: ${({ variant }) =>
    variant === "large" ? "28px" : variant === "medium" ? "22px" : "16px"};
  font-weight: bold;
  margin-bottom: 15px;
`;

export const CardText = styled.div`
  color: #808080;
  font-size: 14px;
`;

export const CardImage = styled.div<{
  variant: "large" | "medium" | "small";
}>`
  width: ${({ variant }) => {
    if (variant === "large") return "200px";
    if (variant === "medium") return "390px";
    if (variant === "small") return "80px";
    return "100%";
  }};

  height: ${({ variant }) => {
    if (variant === "large") return "200px";
    if (variant === "medium") return "130px";
    if (variant === "small") return "80px";
    return "100%";
  }};

  min-width: ${({ variant }) => {
    if (variant === "large") return "200px";
    if (variant === "medium") return "390px";
    if (variant === "small") return "80px";
    return "100%";
  }};

  min-height: ${({ variant }) => {
    if (variant === "large") return "200px";
    if (variant === "medium") return "130px";
    if (variant === "small") return "80px";
    return "100%";
  }};
`;

export const Img = styled.img<{
  variant: "large" | "medium" | "small";
}>`
  width: 100%;
  height: 100%;
`;

export const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const GapContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;
