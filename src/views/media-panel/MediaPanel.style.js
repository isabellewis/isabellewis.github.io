import styled from "styled-components";

const MediaPanelWrapper = styled.div`
  .cardList {
    animation: fadeIn 0.5s;
    margin: 0 auto;
    max-width: 1500;
    padding: 40px 0 0;

    &.dark-panel {
      background: #000;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      list-style-type: none;
      padding: 40px 0;
      width: 100%;

      .card {
        align-items: center;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px;
        min-width: 400px;
        max-width: 500px;
        overflow: hidden;
        padding: 15px 0;
        transition: opacity 1.5s ease-in-out;
        width: 100%;

        &:hover {
          opacity: 0.5;
        }

        &-link {
          align-items: center;
          color: #000;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
          text-decoration: none;

          .mediaPanel__h2 {
            text-decoration: underline;
          }
        }

        @media only screen and (min-width: 576px) {
          width: 25%;
        }

        .mediaPanel__copy-container {
          color: #fff;
        }
      }
    }

    &.light-panel {
      .card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-height: 520px;

        .mediaPanel__copy-container {
          margin: auto;
        }

        .mediaPanel__img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
      }

      @media only screen and (min-width: 576px) {
        background: #fff;
        min-height: 420px;

        .card {
          flex-direction: row;

          .mediaPanel__img {
            max-height: 100%;
            max-width: 50%;
            min-height: 520px;
          }

          :nth-child(2n) {
            flex-direction: row-reverse;
          }
        }
      }
    }
  }

  .mediaPanel {
    &__img {
      width: 100%;
    }

    &__copy-container {
      color: #000;
      text-decoration-color: #000;
      padding: 20px 10px;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export { MediaPanelWrapper };
