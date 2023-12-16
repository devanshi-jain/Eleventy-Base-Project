// _data/dates.js

const { DateTime } = require("luxon");

module.exports = {
  parseDate: function (dateString) {
    // You can customize this function based on your needs
    return DateTime.fromSQL(dateString).toJSDate();
  },
};
