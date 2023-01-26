import styled from "styled-components";

const GlobalStyles = styled.div`
  width: 100%;
  max-width: calc(1519px + 17px);
  margin-inline: auto;

  .big-button {
    padding: 18px 24px;
    margin-bottom: 12px;
    border-radius: 30px;
  }
  .cta {
    background: #111;
    color: #fff;
  }
  .bd-rd-50p {
    border-radius: 50%;
  }
  .grey-bg {
    box-shadow: rgb(229, 229, 229) 0px 1px 0px 0px inset,
      rgb(229, 229, 229) -1px 0px 0px 0px inset,
      rgb(229, 229, 229) 0px -1px 0px 0px inset,
      rgb(229, 229, 229) 1px 0px 0px 0px inset;
    background: #f5f5f5;
  }
  .grid-col-span-2 {
    grid-column: span 2;
  }
  .grid-col-span-3 {
    grid-column: span 3;
  }
  .grid-col-span-4 {
    grid-column: span 4;
  }
  .grid-col-span-5 {
    grid-column: span 5;
  }
  .grid-col-span-all {
    grid-column: 1 / -1;
  }
  .xsmall-font {
    font-size: 10px;
  }
  .small-font {
    font-size: 12px;
  }
  .regular-font {
    font-size: 16px;
  }
  .bigger-font {
    font-size: 18px;
  }
  .medium-font {
    font-size: 20px;
  }
  .font-14 {
    font-size: 14px;
  }
  .font-24 {
    font-size: 24px;
  }
  .large-font {
    font-size: 25px;
  }
  .larger-font {
    font-size: 32px;
  }
  .max-font {
    font-size: 72px;
  }
  .grey-font {
    color: #757575;
  }
  .grey-font *,
  .grey-font::before,
  .grey-font::after {
    color: #757575;
  }
  .grey-font::before,
  .grey-font::after {
    border-color: #757575;
  }
  .red-font {
    color: #d43f21;
  }
  .white-font {
    color: #fff;
  }
  .bold-font {
    font-family: "Anton", sans-serif;
    font-weight: 400;
  }
  .uppercase-text {
    text-transform: uppercase;
  }
  .capitalized-text {
    text-transform: capitalize;
  }
  .text-underline {
    text-decoration: underline;
  }
  .normal-text {
    text-transform: initial;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .bordered-top-bottom {
    padding: 16px 0 12px 0;
    margin: 12px 0;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
  .flex {
    display: flex;
    gap: 10px;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-spbw {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  .flex-start {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-end {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .gap-3 {
    gap: 3px;
  }
  .gap-5 {
    gap: 5px;
  }
  .gap-15 {
    gap: 15px;
  }
  .gap-25 {
    gap: 15px;
  }
  .inline-block {
    display: inline-block;
  }
  .flex-1 {
    flex: 1;
  }
  .w-100 {
    width: 100%;
  }
  .underlined {
    position: relative;
    line-height: 1.6;
    cursor: pointer;
  }
  .underlined::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    border-bottom: 1px solid #111;
    width: 100%;
  }
  .hover-w-fade:hover,
  .hover-w-fade:hover::after,
  .hover-w-fade:hover::before {
    opacity: 0.8;
  }

  .hover-w-hl-udl:hover::after {
    border-bottom-width: 2px;
  }
  .mt-25 {
    margin-top: 25px;
  }
  .pl-20 {
    padding-left: 20px;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .position-relative {
    position: relative;
  }
  .position-relative .hidden {
    visibility: hidden;
    opacity: 0;
  }
  .position-relative:hover .hidden {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 1200px) {
    .xsmall-font {
      font-size: 8px;
    }
    .small-font {
      font-size: 10px;
    }
    .regular-font {
      font-size: 14px;
    }
    .medium-font {
      font-size: 18px;
    }
    .bigger-font {
      font-size: 16px;
    }
    .large-font {
      font-size: 23px;
    }
    .max-font {
      font-size: 50px;
    }
    .font-14 {
      font-size: 12px;
    }
    .font-24 {
      font-size: 22px;
    }
  }
  @media (max-width: 450px) {
    .xsmall-font {
      font-size: 7px;
    }
    .small-font {
      font-size: 9px;
    }
    .regular-font {
      font-size: 13px;
    }
    .medium-font {
      font-size: 16px;
    }
    .bigger-font {
      font-size: 15px;
    }
    .large-font {
      font-size: 21px;
    }
    .max-font {
      font-size: 45px;
    }
    .font-14 {
      font-size: 13px;
    }
    .font-24 {
      font-size: 21px;
      line-height: inherit;
    }

    .logo-icon {
      width: 45px;
    }
  }
`;

export default GlobalStyles;
