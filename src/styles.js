import styled, { createGlobalStyle } from "styled-components";
import cinema from "./cinema.jpg";

export const GlobalStyle = createGlobalStyle`
        body {
            background-image: ${cinema};
        }
    `;

export const Title = styled.h1`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
  color: #1d3557;
`;

export const Description = styled.h5`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: center;
  color: #457b9d;
`;

export const MovieWrapper = styled.div`
  display: inline-block;
  display: relative;
  margin: 20px;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  p {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 20px auto;
    margin-top: 30px;
  }
  img {
    width: 350px;
    height: 500px;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 400px);
  justify-content: center;
`;
