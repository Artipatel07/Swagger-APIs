'use strict';

var utils = require('../utils/writer.js');
var Clauses = require('../service/ClausesService');

module.exports.addClause = function addClause (req, res, next, body) {
  Clauses.addClause(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.allPrivateClause = function allPrivateClause (req, res, next) {
  Clauses.allPrivateClause()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.allPublicClause = function allPublicClause (req, res, next) {
  Clauses.allPublicClause()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAClause = function deleteAClause (req, res, next) {
  Clauses.deleteAClause()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAllClauses = function deleteAllClauses (req, res, next) {
  Clauses.deleteAllClauses()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAClause = function getAClause (req, res, next) {
  Clauses.getAClause()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.toggleVisibility = function toggleVisibility (req, res, next) {
  Clauses.toggleVisibility()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAClause = function updateAClause (req, res, next, body) {
  Clauses.updateAClause(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateContext = function updateContext (req, res, next, body) {
  Clauses.updateContext(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
