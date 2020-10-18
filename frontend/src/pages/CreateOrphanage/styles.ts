import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  main {
    flex: 1;
  }

  form.create-orphanage-form {
    width: 700px;
    margin: 64px auto;
    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    padding: 64px 80px;
    overflow: hidden;

    fieldset {
      border: 0;

      + fieldset {
        margin-top: 80px;
      }

      legend {
        width: 100%;
        font-size: 32px;
        line-height: 34px;
        color: #5c8599;
        font-weight: 700;
        border-bottom: 1px solid #d3e2e5;
        margin-bottom: 40px;
        padding-bottom: 24px;
      }
    }

    .leaflet-container {
      border: solid 1px #d3e2e5;
      border-radius: 20px;
      margin-bottom: 40px;
    }

    .input-block {
      + .input-block {
        margin-top: 24px;
      }

      label {
        display: flex;
        color: #8fa7b3;
        margin-bottom: 8px;
        line-height: 24px;

        span {
          font-size: 14px;
          color: #8fa7b3;
          margin-left: 24px;
          line-height: 24px;
        }
      }

      input,
      textarea {
        width: 100%;
        background: #f5f8fa;
        border: 1px solid #d3e2e5;
        border-radius: 20px;
        outline: none;
        color: #5c8599;
      }

      input {
        height: 64px;
        padding: 0 16px;
      }

      textarea {
        min-height: 120px;
        max-height: 240px;
        resize: vertical;
        padding: 16px;
        line-height: 28px;
      }

      .images-container {
        display: grid;
        grid-gap: 16px;
        grid-template-columns: repeat(5, 1fr);

        img {
          border-radius: 20px;
          height: 96px;
          object-fit: cover;
          width: 100%;
        }
      }

      .new-image {
        align-items: center;
        background: #f5f8fa;
        border-radius: 20px;
        border: 1px dashed #96d2f0;
        cursor: pointer;
        display: flex;
        height: 96px;
        justify-content: center;
        margin: 0;
      }

      input[type='file'] {
        display: none;
      }

      .button-select {
        display: grid;
        grid-template-columns: 1fr 1fr;

        button {
          height: 64px;
          background: #f5f8fa;
          border: 1px solid #d3e2e5;
          color: #5c8599;
          cursor: pointer;

          &.active {
            background: #edfff6;
            border: 1px solid #a1e9c5;
            color: #37c77f;
          }

          &:first-child {
            border-radius: 20px 0px 0px 20px;
          }

          &:last-child {
            border-radius: 0 20px 20px 0;
            border-left: 0;
          }
        }
      }
    }

    button.confirm-button {
      margin-top: 40px;
      width: 100%;
      height: 64px;
      border: 0;
      cursor: pointer;
      background: #3cdc8c;
      border-radius: 20px;
      color: #ffffff;
      font-weight: 800;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background-color 0.2s;

      &:hover {
        background: #36cf82;
      }

      svg {
        margin-right: 16px;
      }
    }
  }
`;

export const ToggleWrapper = styled.div``;
