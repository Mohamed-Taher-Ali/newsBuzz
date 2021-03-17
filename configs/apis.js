exports.getNewsApi = (skip, limit) => (
    `${process.env.REACT_APP_BASE_URL}/news?skip=${skip}&limit=${limit}`
)