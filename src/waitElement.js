export function waitElement(elementId) {
  return new Promise((resolve, reject) => {
    const element = document.getElementById(elementId);
    if (element) {
      resolve(element);
    } else {
      let tries = 10;
      const interval = setInterval(() => {
        const element = document.getElementById(elementId);
        if (element) {
          clearInterval(interval);
          resolve(element);
        }
        if (tries-- < 0) {
          clearInterval(interval);
          reject(new Error("Element not found"));
        }
      }, 100);
    }
  });
}
