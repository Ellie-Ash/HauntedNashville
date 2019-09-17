const remoteURL = "http://localhost:5002"

export default {
    // LOCATIONS
    getAllLocations() {
        return fetch(`https://data.nashville.gov/resource/vk65-u7my.json`)
            .then(response  => response.json())
            .then(result => {
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
    postLocation(locationObject) {
        return fetch(`https://data.nashville.gov/resource/vk65-u7my.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObject)
        })
        .then(response => response.json())
    },

    //REVIEWS 
    getAllReviews() {
        return fetch(`${remoteURL}/reviews?_sort=rating&_order=desc`)
        .then(result => result.json())
    },
    getReview(id) {
        return fetch(`${remoteURL}/reviews/${id}`)
            .then(response => response.json());
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
    deleteReview(id) {
        return fetch(`${remoteURL}/reviews/${id}`,
        {method: "DELETE"
        })
        .then(response => response.json())
    },
    editReview(editedReview) {
        return fetch (`${remoteURL}/reviews/${editedReview.id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedReview)
        })
        .then(response => response.json());
    },

    // SAVED LOCATIONS 
    getAllSavedLocations() {
        return fetch(`${remoteURL}/savedLocations`)
        .then(result => result.json())
        .then(response => {
            console.log(response, "saved fetch")
            return response
        })   
    },
    saveLocation(saved) {
        return fetch(`${remoteURL}/savedLocations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(saved)
        })
        .then(data => data.json())
    },
    removeSavedLocation(id) {
        return fetch(`${remoteURL}/savedLocations/${id}`,
            {
                method: "DELETE"
            }).then(response => response.json());
    },

    // USERS
    getAllUsers() {
        return fetch(`${remoteURL}/users`)
            .then(response => response.json());
    },
    getUser(id) {
        return fetch(`${remoteURL}/users/${id}`)
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
