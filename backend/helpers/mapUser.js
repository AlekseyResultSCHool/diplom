module.exports = function (user) {
    return {
        id: user.id,
        login: user.login,
        registed_at: user.createdAt,
        roleId: user.role,
    }
}