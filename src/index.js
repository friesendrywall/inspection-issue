import 'schema.js';

/**
 *
 * @param {number[]} alarms
 * @param {number[]} alerts
 * @param {number[]} server
 * @returns {Object}
 * @constructor
 */
const AlarmGroup = function (alarms, alerts, server) {
    return {
        alarms,
        alerts,
        server
    };
};

/**
 * @param {FarmSettings[]} farms
 * @constructor
 */
const SET_USER_ALARM_SETTINGS = function(farms) {
    const good = /** @type FarmSettings */ farms[0];
    const bad_test = farms[0].alerts.length;// <-- alerts not flagged
    const good_test = good.alerts.length;// <-- alerts properly warned
};
