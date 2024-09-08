export function formatCurrencyString(value: string) {
  const numericValue = value.replace(/\D/g, "");

  const numberValue = parseInt(numericValue, 10) || 0;

  const amount = numberValue / 100;

  return amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function formatCurrencyNumber(value: number) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
