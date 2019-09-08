

export function fetchData(fixed, type) {
    return fetch(fixed + type)
        .then(response => response.json())
}