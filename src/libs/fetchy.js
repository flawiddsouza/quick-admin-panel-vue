async function handleResponse(response) {
    const responseText = await response.text()

    try {
        return { data: JSON.parse(responseText), status: response.status }
    } catch {
        return { data: responseText, status: response.status }
    }
}

function getCookie(name) {
    if (!document.cookie) {
        return null;
    }

    const cookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(name + '='));

    if(cookies.length === 0) {
        return null
    }

    return decodeURIComponent(cookies[0].split('=')[1])
}

function getDefaultHeaders() {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': getCookie('XSRF-TOKEN')
    }
}

async function handlePOST(method, url, data, multipartFormData) {
    let response = null

    let headers = getDefaultHeaders()

    if(multipartFormData === false) {
        response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        })
    } else {
        delete headers['Content-Type']
        response = await fetch(url, {
            method: method,
            headers: headers,
            body: data
        })
    }

    return await handleResponse(response)
}

export default {
    async get(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: getDefaultHeaders()
        })

        return await handleResponse(response)
    },

    async post(url, data={}, multipartFormData=false) {
        return await handlePOST('POST', url, data, multipartFormData)
    },

    async put(url, data={}, multipartFormData=false) {
        return await handlePOST('PUT', url, data, multipartFormData)
    },

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: getDefaultHeaders(),
        })

        return await handleResponse(response)
    }
}
