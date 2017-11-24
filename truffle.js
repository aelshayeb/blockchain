module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
module.exports = {
          build: {
            "index.html": "index.html",
            "app.js": [
              "app.js"
            ],
            "app.css": [
              "style.css"
            ],
            "images/": "images/"
          }
        };