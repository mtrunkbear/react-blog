export const simpleStringRegex = /^[a-zA-Z0-9_ ]{3,20}$/;
export function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
  