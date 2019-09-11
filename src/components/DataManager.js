const remoteURL = "http://localhost:5002"

export default {
    // LOCATIONS
    getAllLocations() {
        return fetch(`https://data.nashville.gov/resource/vk65-u7my.json`)
            .then(response  => response.json())
            .then(result => {
                    console.log(result)
                    return result
            })
    },
    getLocation(id) {
        return fetch(`https://data.nashville.gov/resource/vk65-u7my.json?number=${id}`).then(result => result.json())
    },


    // USERS
    getAllUsers() {
        return fetch(`${remoteURL}/users`)
            .then(response => response.json());
    },
    checkUsers(email, password) {
        return fetch(`${remoteURL}/users?email=${email}&&password=${password}`)
            .then(response => response.json());
    },
    postUser(userObject) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObject)
        }).then(data => data.json())
    }
}
