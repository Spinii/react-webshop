import AboutLists from "../subComponents/AboutLists";
import AboutParagraph from "../subComponents/AboutParagraph";
import "./About.css";

function About() {
  const whyChooseUsImage =
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const ourValuesImage =
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const ourVisionImage =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const ourVision = [
    {
      title: "Our Vision:",
      description:
        "At [Shop Name], we aim to revolutionize the way people shop online by providing access to a diverse selection of high-quality products from around the world. We believe that everyone should have the opportunity to discover unique and affordable items, regardless of their location. By leveraging the power of technology and innovation, we strive to make shopping more accessible, efficient, and enjoyable for customers everywhere.",
    },
  ];

  const values = [
    {
      title: "Quality:",
      description:
        "We are committed to offering only the best products, sourced from trusted suppliers and manufacturers.",
    },
    {
      title: "Affordability:",
      description:
        "We believe that shopping should be affordable for everyone, which is why we offer competitive prices and great deals on a wide range of items.",
    },
    {
      title: "Diversity:",
      description:
        "We celebrate diversity and inclusivity by offering a diverse selection of products to cater to the varied interests and preferences of our customers.",
    },
    {
      title: "Customer Satisfaction:",
      description:
        "Our customers are at the heart of everything we do, and we are dedicated to providing exceptional customer service to ensure their satisfaction.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Wide Selection:",
      description:
        "With thousands of products across various categories, you'll find everything you need and more at [Shop Name].",
    },
    {
      title: "Great Prices:",
      description:
        "Enjoy unbeatable prices and exclusive deals on your favorite items, saving you money with every purchase.",
    },
    {
      title: "Secure Shopping:",
      description:
        "Shop with confidence knowing that your personal information is safe and secure with our advanced security measures.",
    },
    {
      title: "Fast Shipping:",
      description:
        "Get your orders delivered straight to your doorstep quickly and efficiently, no matter where you are in the world.",
    },
  ];

  console.log("why choose us?", whyChooseUs);

  return (
    <>
      <div className="about-us-banner">
        <h2 className="about-title">About us</h2>
        <p>
          Welcome to [Shop Name], your one-stop destination for all your
          shopping needs! At [Shop Name], we pride ourselves on offering a wide
          range of products at unbeatable prices.{" "}
        </p>
      </div>
      <div className="main-about-container">
        <AboutParagraph item={ourVision} image={ourVisionImage} />
        <AboutLists
          image={ourValuesImage}
          title="Our Values"
          item={values}
          isReversed={false}
        />
        <AboutLists
          image={whyChooseUsImage}
          title="Why Choose Us"
          item={whyChooseUs}
          isReversed={true}
        />
      </div>
    </>
  );
}

export { About };
