/** Zona horaria del negocio (USA). Ajusta si operan en otra ciudad. */
export const BUSINESS_TIMEZONE =
  process.env.NEXT_PUBLIC_BUSINESS_TIMEZONE ?? "America/New_York";

const WEEKEND_DAYS = new Set([0, 5, 6]); // domingo, viernes, sábado

export function getWeekdayInTimezone(
  date: Date,
  timeZone: string = BUSINESS_TIMEZONE
): number {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
  }).format(date);

  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  return map[weekday] ?? date.getDay();
}

/** Viernes, sábado o domingo en la zona del negocio */
export function isWeekendServiceDay(
  date: Date = new Date(),
  timeZone: string = BUSINESS_TIMEZONE
): boolean {
  return WEEKEND_DAYS.has(getWeekdayInTimezone(date, timeZone));
}

export function getNextWeekendLabel(
  date: Date = new Date(),
  timeZone: string = BUSINESS_TIMEZONE
): string {
  const day = getWeekdayInTimezone(date, timeZone);

  if (day === 5) return "este fin de semana";
  if (day === 6) return "este fin de semana";
  if (day === 0) return "este fin de semana";

  return "el próximo fin de semana";
}
