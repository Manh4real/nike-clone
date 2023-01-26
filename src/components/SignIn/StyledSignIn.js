import styled from "styled-components";

const StyledSignIn = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #0009;
  z-index: 15;
  overflow-y: auto;
  visibility: hidden;
  opacity: 0;

  display: grid;
  place-items: center;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  .close-btn {
    cursor: pointer;
  }

  .sign-in-form {
    position: relative;
    width: 430px;
    height: max-content;
    background: var(--white);
    border-radius: 5px;
    padding: 25px 55px;
  }
  &.active .sign-in-form {
    animation: fadeIn_ 0.2s ease-out;
  }
  .sign-in-content-ctn form {
    padding-inline: 0;
    width: 100%;
  }
  .logo-icon {
    display: block;
    margin-inline: auto;
  }

  @keyframes fadeIn_ {
    0% {
      visibility: hidden;
      opacity: 0;
      transform: translateY(25px);
    }
    100% {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  .title {
    font-size: 25px;
    font-family: "Anton", sans-serif;
    font-weight: 100;
    letter-spacing: 1px;
    line-height: 1.1;
    text-align: center;

    padding: 20px 0;
  }
  .container {
    font-size: 12px;
    color: #8d8d8d;
    text-align: center;
  }

  @media screen and (max-height: 550px) {
    .sign-in-form {
      top: 0;
    }
  }
`;

export default StyledSignIn;
