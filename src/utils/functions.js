const setSession = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data))
}

const getSession = (key) => {
    const stringified = sessionStorage.getItem(key)

    return JSON.parse(stringified)
}

export { setSession, getSession }
