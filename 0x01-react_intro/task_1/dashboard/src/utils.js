export function getFullYear() {
    return new Date().getFullYear();
};

export function getFooterCopy(isIndex=false) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
