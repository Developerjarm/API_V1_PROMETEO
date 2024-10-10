//get users
export const queryGetUsers = `
SELECT id_user, user_authenticatio, rol_user FROM users
`

//get users by id
export const queryGetUserById = `
SELECT id_user, user_authenticatio, rol_user FROM FROM users WHERE id_user = $1
`

//create new user authentication
export const queryCreateNewUser = `
INSERT INTO users(
	id_user, user_authenticatio, password_authentication, rol_user)
	VALUES ($1, $2, $3, $4) RETURNING  user_authenticatio, rol_user;
`

//update user authentication
export const queryUpdateUserAuthentication = `
UPDATE users
SET user_authenticatio = $1, rol_user = $2
WHERE id_user = $3
`

//delete user authentication
export const queryDeleteUserAuthentication = `
DELETE FROM users WHERE id_user = $1
`