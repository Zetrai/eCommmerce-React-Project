import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.style';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

// div::-webkit-scrollbar {
//   width: 0.1em;
// }

// div::-webkit-scrollbar-track {
//   -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
//   border-radius: 10px;
// }

// div::-webkit-scrollbar-thumb {
//   background-color: darkgrey;
//   outline: 1px solid slategrey;
//   border-radius: 10px;
// }
