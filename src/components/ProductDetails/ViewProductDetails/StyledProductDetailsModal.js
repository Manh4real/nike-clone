import styled from "styled-components";

const StyledProductDetailsModal = styled.div`
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
`;

export default StyledProductDetailsModal;
