export const queryUserNameAtuthentication = `
SELECT * FROM users WHERE user_authenticatio = $1
    `