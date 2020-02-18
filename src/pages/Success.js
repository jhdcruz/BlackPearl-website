import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled from "styled-components";

/*
 * ===================
 * Component Style
 * ===================
 */
const FormSubmit = styled.div`
  margin: 27vh auto;
  text-align: center;
`;

const Notice = styled.h1`
  color: #ffc5e0;
  font-size: 4rem;
`;

const Note = styled.h3`
  color: #ffc5e0;
  font-size: 1.3rem;
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function FormSuccess() {
  return (
    <FormSubmit>
      <Notice>Form Submitted.</Notice>
      <Note>We will contact you as soon as possible.</Note>
    </FormSubmit>
  );
}
