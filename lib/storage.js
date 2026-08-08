export function getStorage(key, defaultValue = null) {
  if (typeof window === "undefined") {
    return defaultValue;
  }

  const data = localStorage.getItem(key);

  return data ? JSON.parse(data) : defaultValue;
}

export function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeStorage(key) {
  localStorage.removeItem(key);
}