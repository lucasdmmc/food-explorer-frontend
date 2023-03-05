export function FormatMoney(number) {

  let value = number

  return value.toLocaleString("pt-BR", {
    style: 'currency',
    currency: "BRL",
    minimumFractionDigits: 2,
  })
}