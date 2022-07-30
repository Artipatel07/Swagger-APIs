'use strict';

var utils = require('../utils/writer.js');
var Invite = require('../service/InviteService');

module.exports.getinvitation = function getinvitation (req, res, next) {
  Invite.getinvitation()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendinvite = function sendinvite (req, res, next, body) {
  Invite.sendinvite(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateInvite = function updateInvite (req, res, next, xAuthToken) {
  Invite.updateInvite(xAuthToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
