export default function getDiscountedPrice(price: number, discount: number) {
  return price - (price * discount) / 100;
}
