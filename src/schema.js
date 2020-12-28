/**
 *
 * @typedef {Object} NotifierSettings - Notifiers
 * @property {number} user_id
 * @property {string} target - Email or Phone
 * @property {string} type - enum Email, Phone, Text, Whatsapp
 * @property {string} class - enum User, Sentinel
 * @property {number[]} alarms - enum as defined in alarm-priorities
 * @property {Date|number} last_modified
 */

/**
 * @typedef {Object} FarmSettings - Farm set
 * @property {number} id
 * @property {string} farm_name
 * @property {number | null} location_id
 * @property {string} location
 * @property {string} user_role
 * @property {NotifierSettings[]} user_alerts
 */
