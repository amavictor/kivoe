
export const isDev = () => {
    return process.env.NODE_ENV === 'development';
}


export const isMacOS = () => {
    return process.platform === 'darwin';
}