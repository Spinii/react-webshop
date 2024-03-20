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
          <div className="socials">
            <div className="footer-logo">LOGO</div>
            <h2 style={{ marginBottom: ".5rem" }}>Follow Us On</h2>
            <div className="social-links">
              <RiFacebookFill className="social" />
              <RiTwitterXFill className="social" />
              <RiInstagramFill className="social" />
            </div>
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
