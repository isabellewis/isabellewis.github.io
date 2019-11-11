import styled from "styled-components";

const RecognitionPanelWrapper = styled.div`
  .cardList {
    animation: fadeIn 0.5s;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    width: 100%;
  }

  .card {
    border: 10px solid #000;
    margin: 10px;
    overflow: hidden;
    width: 100%;

    :nth-child(2) {
      border-width: 10px 10px 0 10px;
    }

    :first-child {
      border-width: 0 10px 10px 10px;
    }

    @media only screen and (min-width: 576px) {
      max-width: 500px;
      min-width: 400px;
      width: 100%;
    }

    @media only screen and (min-width: 995px) {
      max-width: 500px;
      min-width: 400px;
      width: 45%;
    }
  }

  .recognitionPanel {
    &__img {
      width: 100%;
    }

    &__copy-container {
      padding: 20px 10px;

      &-link {
        color: #000;
      }
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

export { RecognitionPanelWrapper };
