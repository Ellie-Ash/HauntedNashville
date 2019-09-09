
export default {
    getAll() {
        return fetch(`https://data.nashville.gov/resource/vk65-u7my.json?`)
            .then(response  => response.json())
            .then(result => {
                const data = result.map(r => {
                    return r})
                    console.log(data)
            })
    },
}