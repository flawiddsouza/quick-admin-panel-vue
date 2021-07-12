async function handleResponse(response, responseInterceptor) {
    const responseText = await response.text()

    let responseToReturn = {}

    try {
        responseToReturn = { data: JSON.parse(responseText), status: response.status }
    } catch {
        responseToReturn = { data: responseText, status: response.status }
    }

    if(responseInterceptor) {
        return responseInterceptor(responseToReturn)
    }

    return responseToReturn
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

async function handlePOST(method, url, data, multipartFormData, responseInterceptor) {
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

    return await handleResponse(response, responseInterceptor)
}

export default {
    responseInterceptor: null,

    async get(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: getDefaultHeaders()
        })

        return await handleResponse(response, this.responseInterceptor)
    },

    async post(url, data={}, multipartFormData=false) {
        return await handlePOST('POST', url, data, multipartFormData, this.responseInterceptor)
    },

    async put(url, data={}, multipartFormData=false) {
        return await handlePOST('PUT', url, data, multipartFormData, this.responseInterceptor)
    },

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: getDefaultHeaders(),
        })

        return await handleResponse(response, this.responseInterceptor)
    }
}
