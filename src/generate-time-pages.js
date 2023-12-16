const cities = require('./_data/cities');

module.exports = function (eleventyConfig) {
  cities.forEach((city) => {
    eleventyConfig.addCollection(city.name, (api) => {
      return api.getAll().filter((item) => item.url === `/${city.name.toLowerCase()}/`);
    });

    eleventyConfig.addPassthroughCopy({ 'src/images': 'images' });

    eleventyConfig.addPageData(`/${city.name.toLowerCase()}/index.json`, {
      city,
      currentTime: convertTime(new Date(), city.offset),
    });

    eleventyConfig.addPage(`/${city.name.toLowerCase()}/index.njk`, {
      city,
    });
  });
};

function convertTime(date, offset) {
  if (offset) {
    offset = parseFloat(offset);
  } else {
    offset = 0;
  }

  date.setHours(date.getHours() + offset);
  return date;
}
