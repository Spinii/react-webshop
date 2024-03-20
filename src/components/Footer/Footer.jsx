import {
  RiFacebookBoxFill,
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "@remixicon/react";
import "./Footer.css";

function Footer() {
  const OurInfo = [
    "Šibenik",
    "ourShop@gmail.com",
    "MadeUp Str 69",
    "+337 92 543 252",
  ];

  const siteHelp = [
    "Contact Us",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
    "FAQ (Frequently Asked Questions)",
    "Careers",
    "Site Map",
    "Blog",
    "Help",
    "Shipping Information",
  ];

  const shippingInfo = [
    "Return Policy",
    "Customer Support",
    "Copyright Information",
    "Accessibility Statement",
    "Social Media Links",
    "Newsletter Signup",
    "Testimonials",
    "Press Releases",
    "Partnerships",
    "Resources",
  ];

  return (
    <>
      <div className="footer-container">
        <div className="footer-item">
          <div className="footer-logo">LOGO</div>
          <div className="socials">
            <h2 style={{ marginBottom: ".5rem" }}>Follow Us On</h2>
            <RiFacebookFill color="rgba(9,21,82,1)" size={"2.5rem"} />
            <RiTwitterXFill color="rgba(9,21,82,1)" size={"2.5rem"} />
            <RiInstagramFill color="rgba(9,21,82,1)" size={"2.5rem"} />
          </div>
        </div>
        <div className="footer-item">
          <ul>
            {OurInfo.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            {siteHelp.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
        <div className="footer-item">
          <ul>
            {shippingInfo.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export { Footer };
