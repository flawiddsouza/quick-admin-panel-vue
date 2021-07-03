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

export default {
    async get(url) {
        const response = await fetch(url, {
            method: 'GET',
            headers: getDefaultHeaders()
        })

        return await handleResponse(response)
    },

    async post(url, data={}) {
        const response = await fetch(url, {
            method: 'POST',
            headers: getDefaultHeaders(),
            body: JSON.stringify(data)
        })

        return await handleResponse(response)
    },

    async put(url, data={}) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: getDefaultHeaders(),
            body: JSON.stringify(data)
        })

        return await handleResponse(response)
    },

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: getDefaultHeaders(),
        })

        return await handleResponse(response)
    }
}
