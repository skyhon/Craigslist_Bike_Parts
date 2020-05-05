export function setState(thisObj, jsonObj) {
  return new Promise((resolve, reject) => {
    try {
      thisObj.setState(jsonObj);
      resolve();
    } catch (e) {
      reject(e.message);
    }
  });
}
