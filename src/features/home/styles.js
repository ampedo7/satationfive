import styled from 'styled-components';
import _v from '@s/css/_variable';

export const Wrapper = styled.div`
  .section {
    margin: 2rem 0;
    padding: 1rem 1rem 1rem;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
    .select-search {
      width: 100%;
    }
    .tab {
      // width: 50%;
      .content {
        padding: 1rem;
      }
    }
    .detail {
      width: 30%;
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      // margin-right: 20px;
      .content {
        text-align: left;
        // display: flex;
        // justify-content: right;
        .location {
          font-size: 2rem;
          margin-bottom: 10px;
        }
        .date {
          color: ${_v.void};
          font-weight: 600;
        }
      }
    }
    .weather {
      width: 40%;
      .cloud {
        font-size: 2rem;
        font-weight: 600;
        // color: ${_v.void};
        text-transform: capitalize;
        margin-bottom: 10px;
      }
      .humidity {
        display: flex;
        .label {
          font-weight: 500;
        }
        span {
          color: ${_v.void};
          font-weight: 500;
        }
      }
      .wind {
        display: flex;
        .label {
          font-weight: 500;
        }
        span {
          color: ${_v.void};
          font-weight: 500;
        }
      }
    }
    .temperature {
      width: 30%;
      .main {
        font-size: 2rem;
        font-weight: 600;
        color: ${_v.primary};
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
        text-align: right;
      }
      .hl {
        display: flex;
        flex-wrap: wrap;
        div {
          text-align: center;
          padding: 5px 10px;
          width: 50%;
          color: ${_v.primary};
          font-size: 1.1rem;
          font-weight: 500;
          svg {
            width: 100%;
            color: ${_v.tertiary};
          }
        }
        .high {
          border: 2px dashed ${_v.tertiary};
        }
      }
    }
    // .detail-content {
    //   padding: 1rem;
    //   display: flex;
    //   gap: 20px;
    .nearby-locations {
      width: 40%;
      padding: 1rem;
      h5 {
        color: ${_v.primary};
        font-size: 2rem;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      .list {
        list-style: none;
        padding: 0;
        li {
          padding: 5px 10px;
          color: ${_v.void};
          cursor: pointer;
          span {
            color: ${_v.primary};
          }
        }
        li:hover {
          font-weight: 600;
          background-color: #f1f1f1;
        }
      }
      .active {
        font-weight: 600;
        background-color: #f1f1f1;
      }
    }
    .images {
      width: 60%;
      padding: 1rem;
      .carousel {
        box-shadow: 1px 1px 10px rgb(0 0 0 / 30%);
        .carousel-item {
          img {
            height: 450px;
            width: auto;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }
    }
    // }
  }

  @media (max-width: 992px) {
    .section {
      .detail {
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        border-right: none;
        margin-right: 0px;
      }
      .weather {
        width: 50%;
      }
      .temperature {
        width: 50%;
      }
      .nearby-locations {
        width: 100%;
      }
      .images {
        width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
    .section {
      .weather {
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
      .temperature {
        width: 100%;
        .main {
          border-bottom: none;
          text-align: center;
        }
      }
    }
  }
`;
