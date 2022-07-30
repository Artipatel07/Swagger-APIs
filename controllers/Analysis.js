'use strict';

var utils = require('../utils/writer.js');
var Analysis = require('../service/AnalysisService');

module.exports.allAnalysis = function allAnalysis (req, res, next) {
  Analysis.allAnalysis()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateSFL = function generateSFL (req, res, next, body) {
  Analysis.generateSFL(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAAnalysis = function getAAnalysis (req, res, next, body) {
  Analysis.getAAnalysis(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gettree = function gettree (req, res, next) {
  Analysis.gettree()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.saveAnswers = function saveAnswers (req, res, next, body) {
  Analysis.saveAnswers(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
