import styled from "styled-components";

export const Nav = styled.nav`

    ul {
      list-style: none;
      padding: 0 5px;
      margin: 5px;
      display: flex; 
      font-size:20px;
      width: 100%;
      justify-content: space-around;
      
    }

    li {
     text-decoration: none;
    margin-right: 10px; 
    background: #AFEEEE;
    border-radius: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #000080;
    display: inline-block;
    border: 2px solid #4B0082;
    border-radius: 10px;
    padding: 4px 10px;
}
  `;

  Nav.displayName = 'Nav';