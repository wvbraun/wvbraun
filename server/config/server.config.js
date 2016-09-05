"use strict";

export default {
  port: process.env.PORT || 8080,
  database: process.env.MONGO_URI || "mongodb://localhost/wvbraun"
};
