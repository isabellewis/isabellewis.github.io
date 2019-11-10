import styled from "styled-components";

const RecognitionPanelWrapper = styled.div`
  .cardList {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    width: 100%;
  }

  .card {
    background: #c6f1ff;
    margin: 10px;
    overflow: hidden;
    width: 100%;

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
`;

export { RecognitionPanelWrapper };
