import React from "react";
import "dependency/bulma/css/bulma.min.css";
import styled, { createGlobalStyle } from "styled-components";

/*
 * ===================
 * Component Style
 * ===================
 */

const PrivacyLayout = createGlobalStyle`
  .PrivacyPolicy {
    margin: 0.8rem 11%;
    padding: 2.5rem 8%;
    color: whitesmoke;
    background: rgba(20, 20, 20, 0.85);
    border-radius: 8px;
  }

  h1 {
    font-size: 2.4rem;
    line-height: 0.8;
    text-shadow: -1px 3px 3px #222;
    color: #ff6c93;
  }

  h2 {
    margin: 10px 0;
    font-size: 1.7rem;
    color: #ff6c93;
    font-weight: bold;
    text-decoration: underline;
    line-height: 2;
  }

  h3 {
    font-size: 1.5rem;
    text-shadow: -1px 3px 3px #222;
    color: #ffb5d0;
  }

  span {
    font-size: 1.3rem;
    color: #ffb5d0;
  }

  p {
    color: #ffb5d0;
    text-shadow: -1px 3px 3px #222;
    text-align: justify;
  }

  a {
    color: deeppink;

    .weblink {
      text-decoration: underline;
    }

    :hover {
      color: inherit;
    }
  }

  address {
    font-size: 1.2rem;
    color: deeppink;
    line-height: 1.2;
    font-style: oblique;
    text-shadow: -1px 3px 3px #222;

    i {
      font-size: 1rem;
    }
  }
`;

const Line = styled.hr`
  display: block;
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    580,
    from(#ff80a2),
    to(rgba(40, 40, 40, 0.3))
  );
`;

/*
 * ===================
 * Component
 * ===================
 */
export default function Privacy() {
  return (
    <div className="PrivacyPolicy">
      <PrivacyLayout />
      <h1>Privacy Policy</h1>
      <h3>Your privacy is critically important to us.</h3>
      <address>
        <a href="https://her.is/2smE9v2">
          {/* <span>BlackPearl in your Area is located at:</span> */}
          <br />
          <i className="fas fa-map-marker-alt" /> BlackPearl in your Area
          <br />
          Seville, Habay 2, Camella Homes Blk 3 Lt 5, Mahogany Drive <br />
          Bacoor 4102, Cavite, Philippines
        </a>
        <br />
        (+63) 918 627 3555
      </address>
      <Line />
      <p>
        It is BlackPearl in your Area's policy to respect your privacy regarding
        any information we may collect while operating our website. This Privacy
        Policy applies to{" "}
        <a href="https://blackpearl.now.sh" className="weblink">
          https://blackpearl.now.sh
        </a>{" "}
        (hereinafter, "us", "we", or "https://blackpearl.now.sh"). We respect
        your privacy and are committed to protecting personally identifiable
        information you may provide us through the Website. We have adopted this
        privacy policy ("Privacy Policy") to explain what information may be
        collected on our Website, how we use this information, and under what
        circumstances we may disclose the information to third parties. This
        Privacy Policy applies only to information we collect through the
        Website and does not apply to our collection of information from other
        sources.
      </p>
      <p>
        This Privacy Policy, together with the Terms and conditions posted on
        our Website, set forth the general rules and policies governing your use
        of our Website. Depending on your activities when visiting our Website,
        you may be required to agree to additional terms and conditions.
      </p>
      <h2>Website Visitors</h2>
      <p>
        Like most website operators, BlackPearl in your Area collects
        non-personally-identifying information of the sort that web browsers and
        servers typically make available, such as the browser type, language
        preference, referring site, and the date and time of each visitor
        request. BlackPearl in your Area's purpose in collecting non-personally
        identifying information is to better understand how BlackPearl in your
        Area's visitors use its website. From time to time, BlackPearl in your
        Area may release non-personally-identifying information in the
        aggregate, e.g., by publishing a report on trends in the usage of its
        website.
      </p>
      <p>
        BlackPearl in your Area also collects potentially personally-identifying
        information like Internet Protocol (IP) addresses for logged in users
        and for users leaving comments on https://blackpearl.now.sh blog posts.
        BlackPearl in your Area only discloses logged in user and commenter IP
        addresses under the same circumstances that it uses and discloses
        personally-identifying information as described below.
      </p>
      <h2>Gathering of Personally-Identifying Information</h2>
      <p>
        Certain visitors to BlackPearl in your Area's websites choose to
        interact with BlackPearl in your Area in ways that require BlackPearl in
        your Area to gather personally-identifying information. The amount and
        type of information that BlackPearl in your Area gathers depends on the
        nature of the interaction. For example, we ask visitors who sign up for
        a blog at https://blackpearl.now.sh to provide a username and email
        address.
      </p>
      <h2>Security</h2>
      <p>
        The security of your Personal Information is important to us, but
        remember that no method of transmission over the Internet, or method of
        electronic storage is 100% secure. While we strive to use commercially
        acceptable means to protect your Personal Information, we cannot
        guarantee its absolute security.
      </p>
      <h2>Links To External Sites</h2>
      <p>
        Our Service may contain links to external sites that are not operated by
        us. If you click on a third party link, you will be directed to that
        third party's site. We strongly advise you to review the Privacy Policy
        and terms and conditions of every site you visit.
      </p>
      <p>
        We have no control over, and assume no responsibility for the content,
        privacy policies or practices of any third party sites, products or
        services.
      </p>
      <h2>Protection of Certain Personally-Identifying Information</h2>
      <p>
        BlackPearl in your Area discloses potentially personally-identifying and
        personally-identifying information only to those of its employees,
        contractors and affiliated organizations that (i) need to know that
        information in order to process it on BlackPearl in your Area's behalf
        or to provide services available at BlackPearl in your Area's website,
        and (ii) that have agreed not to disclose it to others. Some of those
        employees, contractors and affiliated organizations may be located
        outside of your home country; by using BlackPearl in your Area's
        website, you consent to the transfer of such information to them.
        BlackPearl in your Area will not rent or sell potentially
        personally-identifying and personally-identifying information to anyone.
        Other than to its employees, contractors and affiliated organizations,
        as described above, BlackPearl in your Area discloses potentially
        personally-identifying and personally-identifying information only in
        response to a subpoena, court order or other governmental request, or
        when BlackPearl in your Area believes in good faith that disclosure is
        reasonably necessary to protect the property or rights of BlackPearl in
        your Area, third parties or the public at large.
      </p>
      <p>
        If you have supplied your email address, BlackPearl in your Area may
        occasionally send you an email to tell you about new features, solicit
        your feedback, or just keep you up to date with what's going on with
        BlackPearl in your Area and our products. We primarily use our website
        to communicate this type of information, so we expect to keep this type
        of email to a minimum. If you send us a request (for example via our
        feedback mechanism), we reserve the right to publish it in order to help
        us clarify or respond to your request or to help us support other users.
        BlackPearl in your Area takes all measures reasonably necessary to
        protect against the unauthorized access, use, alteration or destruction
        of potentially personally-identifying and personally-identifying
        information.
      </p>
      <h2>Aggregated Statistics</h2>
      <p>
        BlackPearl in your Area may collect statistics about the behavior of
        visitors to its website. BlackPearl in your Area may display this
        information publicly or provide it to others. However, BlackPearl in
        your Area does not disclose your personally-identifying information.
      </p>
      <h2>Cookies</h2>
      <p>
        To enrich and perfect your online experience, BlackPearl in your Area
        uses "Cookies", similar technologies and services provided by others to
        display personalized content, appropriate advertising and store your
        preferences on your computer.
      </p>
      <p>
        A cookie is a string of information that a website stores on a visitor's
        computer, and that the visitor's browser provides to the website each
        time the visitor returns. BlackPearl in your Area uses cookies to help
        BlackPearl in your Area identify and track visitors, their usage of
        https://blackpearl.now.sh, and their website access preferences.
        BlackPearl in your Area visitors who do not wish to have cookies placed
        on their computers should set their browsers to refuse cookies before
        using BlackPearl in your Area's websites, with the drawback that certain
        features of BlackPearl in your Area's websites may not function properly
        without the aid of cookies.
      </p>
      <p>
        By continuing to navigate our website without changing your cookie
        settings, you hereby acknowledge and agree to BlackPearl in your Area's
        use of cookies.
      </p>
      <h2>Privacy Policy Changes</h2>
      <p>
        Although most changes are likely to be minor, BlackPearl in your Area
        may change its Privacy Policy from time to time, and in BlackPearl in
        your Area's sole discretion. BlackPearl in your Area encourages visitors
        to frequently check this page for any changes to its Privacy Policy.
        Your continued use of this site after any change in this Privacy Policy
        will constitute your acceptance of such change.
      </p>
    </div>
  );
}
