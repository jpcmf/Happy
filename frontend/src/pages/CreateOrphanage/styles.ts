import styled from 'styled-components';
import { device } from 'styles/device';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

  main {
    flex: 1;
  }

  form.create-orphanage-form {
    animation: 500ms ease-out 0s 1 slideInFromUp;
    background: var(--card-background-color);
    /* border: 1px solid #d3e2e5; */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 64px auto;
    overflow: hidden;
    padding: 32px 16px;
    max-width: 700px;
    width: 100%;

    @media ${device.tablet} {
      border-radius: 20px;
      padding: 64px 80px;
    }

    fieldset {
      border: 0;

      + fieldset {
        margin-top: 80px;
      }

      legend {
        width: 100%;
        font-size: 32px;
        line-height: 34px;
        color: var(--form-legend-text-color);
        font-weight: 700;
        border-bottom: 1px solid #d3e2e5;
        margin-bottom: 40px;
        padding-bottom: 24px;
      }
    }

    .leaflet-container {
      border: solid 1px #d3e2e5;
      border-radius: 20px;
      margin-bottom: 10px;
    }

    .alert {
      align-items: center;
      color: #8fa7b3;
      display: flex;
      font-size: 12px;
      /* margin-left: 15px; */
      margin-bottom: 30px;

      svg {
        margin-right: 5px;
      }
    }

    .input-block {
      + .input-block {
        margin-top: 24px;
      }

      label {
        display: flex;
        color: var(--form-legend-text-color);
        margin-bottom: 8px;
        line-height: 24px;

        span {
          font-size: 12px;
          color: #8fa7b3;
          margin-left: 24px;
          line-height: 24px;
        }
      }

      input,
      textarea {
        width: 100%;
        background: var(--form-input-background-color);
        border: 1px solid var(--form-input-background-color);
        border-radius: 10px;
        outline: none;
        color: #5c8599;

        @media ${device.tablet} {
          border-radius: 20px;
        }

        &::placeholder {
          color: #cedee5;
        }
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

        &--item {
          position: relative;

          span {
            align-items: center;
            background-color: ${colors.danger};
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            padding: 2px;
            position: absolute;
            right: 10px;
            top: 10px;
            transition: opacity ease 300ms;

            &:hover {
              opacity: 0.6;
            }
          }

          svg {
            color: ${colors.white};
          }
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
        width: 96px;
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

      &--small {
        display: flex;
        margin-bottom: 20px;

        > div {
          width: 100%;

          + div {
            margin-left: 30px;
          }

          input {
            height: 48px;
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
