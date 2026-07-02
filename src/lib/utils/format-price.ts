/** Activa cuando quieras mostrar precios en las tarjetas y el popup */
export const SHOW_PRODUCT_PRICES = false;

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
}
