export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid) return "Password is not valid";

  if (name !== null && !/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/.test(name)) {
    return "Name is not valid";
  }

  return null;
};
