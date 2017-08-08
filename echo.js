module.exports = function (message, onsucceed, onerror) {
	cordova.exec(onsucceed, onerror, "Echo", "echo", [message]);
};
