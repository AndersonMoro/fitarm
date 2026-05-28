export function storageKey() {
  return `fitarm-log-${new Date().toISOString().slice(0, 10)}`;
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

export function round(value, digits = 0) {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}
