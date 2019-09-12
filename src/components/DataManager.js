const remoteURL = "http://localhost:5002"

export default {
    // LOCATIONS
    getAllLocations() {
        return fetch(`https://data.nashville.gov/resource/vk65-u7my.json`)
            .then(response  => response.json())
            .then(result => {
                    console.log(result, "all from fetch")
                    return result
            })
    },
    getLocation(id) {
        return fetch(`https://data.nashville.gov/resource/vk65-u7my.json?number=${id}`)
        .then(result => result.json())
        .then(response => {
            console.log(response, "in fetch")
            return response[0]
        })
    },

    //REVIEWS 
    getAllReviews() {
        return fetch(`${remoteURL}/reviews`)
        .then(result => result.json())
    },
    postReview(newReview) {
        return fetch(`${remoteURL}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(data => data.json())
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