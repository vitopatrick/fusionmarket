export const formatCurrency = (price = 0) => {
  if (typeof price === "string") {
    parseInt(price);
  }
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    notation: "standard",
    maximumFractionDigits: 0,
  }).format(price);
};
