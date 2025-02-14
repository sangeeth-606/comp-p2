import Button from "./button";

const Productcard = () => {
  const productImage = "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/dexter_89.png";
  const productName = "Sample Product";
  const price = "$999";

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "220px" }}>
      <img src={productImage} alt={productName} style={{ width: "100%" }} />
      <h3 style={{ margin: "0.5rem 0" }}>{productName}</h3>
      <p style={{ margin: "0.5rem 0" }}>{price}</p>
      <Button />
    </div>
  );
};

export default Productcard;
