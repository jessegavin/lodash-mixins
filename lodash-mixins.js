function trim(string) {
  if (!_.isString(string)) {
    return string;
  }
  if (String.prototype.trim) {
    return string.trim();
  }
  return string.replace(/^\s+|\s+$/g, '');
}

_.mixin({ 'trim': trim });

function isNullOrWhiteSpace(string) {
  return _.isEmpty(_.trim(string));
}

_.mixin({ 'isNullOrWhiteSpace': isNullOrWhiteSpace });