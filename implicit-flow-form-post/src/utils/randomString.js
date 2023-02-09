export const randomString = {
  generate: (length) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  generateCrypto: (length) => {
    const charset =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz+/";
    let result = "";

    while (length > 0) {
      var bytes = new Uint8Array(16);
      var random = window.crypto.getRandomValues(bytes);

      random.forEach(function (c) {
        if (length == 0) {
          return;
        }
        if (c < charset.length) {
          result += charset[c];
          length--;
        }
      });
    }
    return result;
  },
};
