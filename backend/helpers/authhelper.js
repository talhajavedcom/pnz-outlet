import bcrypt from "bcrypt";

// Hash the password after registration

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

// Compare password when login
export const comparePassword = async (password, hashPassword) => {
  return bcrypt.compare(password, hashPassword);
};
