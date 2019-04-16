export async function isReachable() {
    try {
      const result = await fetch('https://httpbin.org/');
      if (result.ok) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
