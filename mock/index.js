var proxy = require("express-http-proxy");
var mockData = require("./define");
var apiProxy = function () {
  if (mockData.define.isProxy) {
    return proxy(mockData.define.domain, {
      forwardPath: function (req, res) {
        return req._parsedUrl.path
      }
    });
  } else {
    return function (req, res, next) {
      if (req.baseUrl) {
        res.json(mockData.getInterFace(req.baseUrl));
      } else {
        res.json({
          "msg": "nodata"
        });
      }
    };
  }
}();

module.exports = function (app) {
  //模拟数据
  if (mockData.define.isProxy && mockData.define.matchPath !== '') {
    app.use(mockData.define.matchPath, apiProxy);
  } else {
    var keys = mockData.interFaces.keys();  //遍历Key

    for (var key of keys) {
      app.use(key, apiProxy);
    }
  }
};
