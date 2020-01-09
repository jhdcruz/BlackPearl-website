import React from "react";
import "bulma-pageloader";
import { createGlobalStyle } from "styled-components";

/*
 * ===================
 * Component Style
 * ===================
 */

const SpinnerBg = createGlobalStyle`
  .pageloader {
    background-color: rgb(20, 20, 20) !important;

    ::after{
      border: 0 solid #ff6c93 !important;
    }
  }

  span {
    color: #ff6c93 !important;
    font-size: 15px !important;
  }
 `;

/*
 * ===================
 * Component
 * ===================
 */

const Spinner = () => {
  return (
    <>
      <SpinnerBg />
      <div className="pageloader is-active">
        <span class="title">Under Maintenance...</span>
      </div>
    </>
  );
};

export default Spinner;
