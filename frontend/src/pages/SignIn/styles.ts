import styled from 'styled-components';
// import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  main {
    flex: 1;
  }

  form.create-orphanage-form {
    animation: 500ms ease-out 0s 1 slideInFromUp;
    background-color: var(--card-background-color);
    border-radius: 20px;
    /* border: 1px solid #d3e2e5; */
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    margin: 64px auto;
    overflow: hidden;
    padding: 64px 80px;
    width: 700px;

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
          font-size: 12px;
          color: #8fa7b3;
          margin-left: 24px;
          line-height: 24px;
        }
      }

      input {
        background: var(--form-input-background-color);
        border-radius: 20px;
        border: 1px solid var(--form-input-background-color);
        color: #5c8599;
        height: 64px;
        outline: none;
        padding: 0 16px;
        width: 100%;

        &::placeholder {
          color: #cedee5;
        }
      }
    }

    button.login-button {
      margin-top: 40px;
    }
  }
`;
