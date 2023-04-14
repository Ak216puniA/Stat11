// Hosts

export const BACKEND_HOST = 'http://localhost:8000'

// Backend URLs

export const baseBackendUrl = () => {
    return `${BACKEND_HOST}/api/`
}

export const loginBackendUrl = () => {
    return `${baseBackendUrl()}auth/login/`
}

export const signupBackendUrl = () => {
    return `${baseBackendUrl()}auth/signup/`
}

export const teamUrl = () => {
    return `${baseBackendUrl()}batter_scoreboard/`
}

export const matchUrl = () => {
    return `${baseBackendUrl()}match/`
}