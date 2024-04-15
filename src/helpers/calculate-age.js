const calculate_age = (user) => {
  if (!user || !user.birth || !(user.birth instanceof Date)) {
    throw new Error("Invalid input: 'birth' should be a Date instance.");
  }
  let date_diff = new Date(Date.now() - user.birth.getTime()),
      age = Math.abs(date_diff.getUTCFullYear() - 1970);
  return age;
}

module.exports = calculate_age;
