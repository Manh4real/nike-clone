import styled from "styled-components";

const StyledDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 15px;
  padding: 15px 50px;
  position: relative;

  .card {
    text-transform: capitalize;
    padding: 10px;
    border-radius: 30px;
    background: #fff;
    position: absolute;
    top: 30px;
    left: 60px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    line-height: 1;

    z-index: 1;
  }

  .images-ctn {
    grid-column: span 2;
    grid-row: span 1;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 12px;
    position: relative;
    height: max-content;

    .detail-image {
      cursor: pointer;
      display: inline-flex;
      ${"" /* min-height: 428.55px; */}
      ${"" /* max-width: calc(100% - 15px); */}

      background-color: #f2f2f2;
      flex: 1;

      img {
        width: 100%;
      }
    }
  }

  .desc {
    grid-column: span 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;

    img {
      width: 100%;
    }
    .desc-para {
      padding: 45px;
      text-align: center;
      width: 65%;
      margin-bottom: 80px;

      .title {
        font-weight: 500;
        font-size: 32px;
        padding-bottom: 20px;
      }
    }
  }

  .misc {
    min-height: 200px;

    details {
      box-shadow: inset 0 1px 0 0 #e5e5e5;
    }
    summary {
      padding: 24px 0;
    }
    .content {
      padding: 15px;
    }
  }

  @media (max-width: 1000px) {
    .detail-image {
      grid-column: 1 / -1;
    }
    .desc .desc-para {
      width: 100%;
    }
  }

  @media (max-width: 720px) {
    .desc .desc-para {
      padding-inline: 0;

      .medium-font {
        font-size: 14px !important;
      }
    }
    .card {
      left: 40px;
    }
    & {
      padding-inline: 20px;
    }

    .detail-image {
      grid-column: auto;
    }
    .images-ctn {
      grid-column: 1 / -1;
      grid-template-columns: none;

      grid-auto-flow: column;
      grid-auto-columns: 100%;
      scroll-snap-type: x mandatory;
      scroll-padding: 35px;

      overflow: auto;

      > .detail-image {
        scroll-snap-align: start;
      }
      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export default StyledDetails;
