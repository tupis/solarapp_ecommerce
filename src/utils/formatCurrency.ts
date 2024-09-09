export function formatCurrencyString(value: string) {
  if (!value) return "R$ 0,00";

  const numericValue = value.padStart(3, "0");
  const realCurrency = numericValue.slice(0, -2);
  const cents = numericValue.slice(-2);

  return `R$ ${parseInt(realCurrency, 10)},${cents}`;
}

export function formatCurrencyNumber(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
