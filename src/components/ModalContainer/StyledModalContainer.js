import styled from "styled-components";

const StyledModalContainer = styled.div`
  .fixed-image-modal {
    display: grid;
    place-items: center;
    background: #fff;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    overflow-y: scroll;

    visibility: hidden;
    opacity: 0;
    transition: all 0.05s ease-out;

    &.showed {
      visibility: visible;
      opacity: 1;
    }
    img {
      height: 90%;
      /* object-fit: contain; */
    }
  }
  .close-modal-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 30px;
    cursor: pointer;
    z-index: 111;

    button {
      padding: 20px 25px;
      font-size: 25px;
      background: transparent;
    }
  }

  .product-details-modal-ctn {
    display: grid;
    place-items: center;
    background: #0008;

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;

    transition: all 0.05s ease-out;

    .product-details-modal {
      padding: 30px;
      border-radius: 15px;
      width: 500px;
      height: 250px;
      background: #fff;
      line-height: 1.8;
      position: relative;

      .close-btn-ctn {
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
  }
`;

export default StyledModalContainer;
