const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },

  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },

  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return `Halaman tidak dapat diakses dengan ${method} tersebut`;
    },
  },

  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return `Halaman tidak dapat diakses dengan ${method} tersebut`;
    },
  },

  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak dapat ditemukan";
    },
  },

  {
    method: "GET",
    path: `/user/{username}`,
    handler: (request, h) => {
      const { username } = request.params;
      return `Hello ${username}! ganteng`;
    },
  },

  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai, ${name}!`;
      }
      return `Hello, ${name}!`;
      
    },
  },
];

module.exports = routes;
