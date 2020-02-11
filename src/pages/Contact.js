import React from "react";
import "dependency/@fortawesome/fontawesome-free/css/all.min.css";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .BgCard {
    background-color: rgba(20, 20, 20, 0.7);
    color: #ff6c93;
    border-radius: 8px;
    padding: 20px 10px !important;
    vertical-align: middle;
    margin: 35px auto !important;
    height: max-content !important;
  }

  select,
  .control,
  .input,
  .textarea {
    color: rgba(255, 128, 162, 0.9) !important;
    background-color: rgba(0, 0, 0, 0.3) !important;
    vertical-align: middle;

    :hover {
      border-color: rgba(255, 128, 162, 0.9);
    }

    :focus {
      border-color: deeppink;
      box-shadow: none;
    }
    option {
      color: #000 !important;
    }
  }

  .submitControl {
    background-color: transparent !important;
  }

  ::placeholder {
    color: #FF80A2 !important;
    opacity: 0.9 !important;
  }
  ::placeholder {
    color: #FF80A2 !important;
    opacity: 0.9 !important;
  }
  ::placeholder {
    color:#FF80A2 !important;
    opacity: 0.9 !important;
  }

   @media screen and (max-width: 720px) {
    form,
    .field,
    .contact-form {
      margin: 5px auto !important;
      text-align: center;
    }

    .field-label,
    .control {
      margin: 10px auto;
    }
    button {
      display: block !important;
      margin: 5px auto !important;
    }
  }
`;

const ContactForm = styled.div`
  margin: 3vh auto;
  padding: 1rem 2.1rem;
`;

const Form = styled.form`
  margin: 1em auto;
  padding: 1rem 3rem 1rem 1rem;
`;

const Title = styled.h2`
  color: rgba(255, 128, 162, 1);
  font-size: 1.7rem;
  text-align: center;
  line-height: 0.9;
`;

const SubTitle = styled.h5`
  font-size: 1rem;
  color: rgba(255, 128, 162, 1);
  text-align: center;
`;

const Label = styled.div`
  color: rgba(255, 128, 162, 0.9);
  text-shadow: 1px 3px 2px #323232;
  text-transform: uppercase;
  font-weight: 500;
`;

const Notice = styled.h6`
  color: #ff4c93;
  text-shadow: -1px 1px 2px #323232;
  font-size: 12.4px;
  margin: 5px 0 0 0;
`;

const Button = styled.button`
  margin: 0;
  padding: 7px 15px !important;
  color: rgba(255, 128, 162, 0.9) !important;
  border-color: white !important;
  background-color: rgba(0, 0, 0, 0.5) !important;

  .is-hovered,
  :hover {
    border-color: deeppink !important;
    color: rgba(255, 128, 162, 0.9) !important;
  }
`;

// * Sender's Info
function UserInfo() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">From</Label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control is-expanded has-icons-left">
            <input
              className="input"
              type="text"
              placeholder="Juan Thuthree"
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              name="email"
              autoComplete="new-password"
              placeholder="juan.thuthree45@gmail.com"
              required
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// * Contact Category
function ContactPurpose() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">Purpose</Label>
      </div>
      <div className="field-body">
        <div className="field is-narrow">
          <div className="control">
            <div className="select is-fullwidth">
              <select name="category" required>
                <option>General</option>
                <option>Feedback</option>
                <option>Business</option>
                <option>Technical</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// * Subject / Headline
function Subject() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">Subject</Label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <input
              className="input"
              type="text"
              name="subject"
              autoComplete="new-password"
              placeholder="e.g. I would like to suggest something..."
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// * Message / Textarea
function MessageContent() {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <Label className="label">Message</Label>
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              name="message"
              placeholder="How can we help you?"
              required
            />
          </div>
          <Notice>Information that are submitted are kept confidential.</Notice>
        </div>
      </div>
    </div>
  );
}

// * Submit Button
function Submit() {
  return (
    <div className="field is-horizontal">
      <div className="field-label" />
      <div className="field-body">
        <div className="field">
          <div className="control submitControl">
            <Button className="button is-outlined" type="submit" value="Send">
              <span>
                <i className="fas fa-paper-plane" /> Submit
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <ContactForm className="container BgCard">
      <Title>More Questions?</Title>
      <SubTitle>Feel free to contact us!</SubTitle>
      {/* Action refers to contact email holder by pageclip */}
      <Form className="contact-form" method="post">
        <GlobalStyle />
        <UserInfo />
        <ContactPurpose />
        <Subject />
        <MessageContent />
        <Submit />
      </Form>
    </ContactForm>
  );
}
