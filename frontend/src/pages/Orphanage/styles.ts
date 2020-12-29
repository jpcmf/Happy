import styled from 'styled-components';
import colors from '../../styles/colors';
import { device } from '../../styles/device';

export const Container = styled.div`
  animation: 500ms ease-out 0s 1 fadeIn;
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  .orphanage-details {
    background: var(--card-background-color);
    border-radius: 20px;
    /* border: 1px solid #d3e2e5; */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 64px auto;
    overflow: hidden;
    max-width: 700px;
    width: 100%;

    @media ${device.laptop} {
      /* flex-direction: column; */
    }

    > img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .images {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 16px;
      margin: 16px 40px 0;

      button {
        border: 0;
        height: 88px;
        background: none;
        cursor: pointer;
        border-radius: 20px;
        overflow: hidden;
        outline: none;
        opacity: 0.6;
        transition: opacity 300ms ease;

        &:hover {
          opacity: 1;
        }

        img {
          width: 100%;
          height: 88px;
          object-fit: cover;
        }
      }

      button.active {
        opacity: 1;
      }
    }

    .orphanage-details-content {
      padding: 80px;

      h1 {
        color: var(--form-legend-text-color);
        font-size: 45px;
        line-height: 54px;
        margin-bottom: 8px;
      }

      p {
        line-height: 28px;
        color: var(--form-legend-text-color);
        margin-top: 24px;
      }

      textarea {
        background: transparent;
        border: none;
        box-shadow: none;
        color: var(--form-legend-text-color);
        display: flex;
        height: 100%;
        height: 50vh;
        line-height: 28px;
        margin-top: 32px;
        outline: none;
        overflow: auto;
        padding: 0 32px 0 0;
        resize: none; /*remove the resize handle on the bottom right*/
        width: 100%;
      }

      .map-container {
        margin-top: 64px;
        background: #e6f7fb;
        border: 1px solid #b3dae2;
        border-radius: 20px;

        footer {
          padding: 20px 0;
          text-align: center;

          a {
            line-height: 24px;
            color: #0089a5;
            text-decoration: none;
          }
        }

        .leaflet-container {
          border-bottom: 1px solid #dde3f0;
          border-radius: 20px;
        }
      }

      hr {
        width: 100%;
        height: 1px;
        border: 0;
        background: #d3e2e6;
        margin: 64px 0;
      }

      h2 {
        color: var(--form-legend-text-color);
        font-size: 36px;
        line-height: 46px;
      }

      .open-details {
        margin-top: 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;

        div {
          padding: 32px 24px;
          border-radius: 20px;
          line-height: 28px;

          svg {
            display: block;
            margin-bottom: 20px;
          }
        }

        div.hour {
          background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
          border: 1px solid #b3dae2;
          color: #5c8599;
        }

        div.open-on-weekends {
          background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
          border: 1px solid #a1e9c5;

          p {
            color: #37c77f;
          }

          &--red {
            background: linear-gradient(
              154.16deg,
              #fcf0f4 7.85%,
              #ffffff 91.03%
            );
            border: 1px solid #ffbcd4;
            p {
              color: ${colors.danger};
            }
          }
        }
      }

      button.contact-button {
        margin-top: 64px;
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
  }
`;
