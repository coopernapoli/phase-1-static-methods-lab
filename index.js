class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-\'\s]/g, "");
  }

  static titleize(string) {
    const articles = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return string
      .split(" ")
      .map((word, i) => {
        if (i === 0) {
          return word[0].toUpperCase() + word.slice(1);
        } else if (articles.indexOf(word) === -1) {
          return word[0].toUpperCase() + word.slice(1);
        } else {
          return word;
        }
      })
      .join(" ");
  }
}