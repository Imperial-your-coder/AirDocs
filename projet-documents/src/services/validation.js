// Basic validation helpers
module.exports = {
  isEmail: (s) => /\S+@\S+\.\S+/.test(s),
  required: (v) => v !== undefined && v !== null && v !== ''
};
