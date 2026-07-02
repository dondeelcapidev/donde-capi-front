export function buildWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const cleanNumber = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

const CATEGORY_ORDER_PHRASE: Record<string, string> = {
  antojitos: "un antojito",
  tamales: "un tamal",
  pizza: "una pizza",
  especiales: "un plato especial",
  bebidas: "una bebida",
};

export function buildProductOrderMessage(
  productName: string,
  categorySlug: string
): string {
  const tipo = CATEGORY_ORDER_PHRASE[categorySlug] ?? "algo del menú";
  return `Hola Capi, quiero comprar ${tipo} y es ${productName}.`;
}

export function buildCateringMessage(): string {
  return "Hola Capi, me interesa saber más sobre el servicio de catering";
}

export function buildDatesMessage(): string {
  return "Hola Capi, quiero consultar las fechas disponibles para catering";
}

export function buildWeekendMenuInquiryMessage(): string {
  return "Hola Capi, quiero saber el menú especial de este fin de semana";
}
