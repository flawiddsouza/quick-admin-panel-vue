function showNotification(backgroundColor, message) {
    const notificationBoxBody = document.createElement('div')
    notificationBoxBody.innerHTML = message
    notificationBoxBody.style.padding = '1.5rem 2rem'

    const notificationBox = document.createElement('div')
    notificationBox.style.cssText = `
        z-index: 3;
        position: fixed;
        bottom: 40px;
        right: 40px;
        background-color: ${backgroundColor};
        color: white;
        box-shadow: 0 0 3px black;
        border-radius: 4px;
        user-select: none;
        cursor: pointer;
        font-size: 1rem;
    `

    const progressBar = document.createElement('div')
    progressBar.style.height = '1em'
    progressBar.style.backgroundColor = 'white'
    let width = 100
    progressBar.style.width = `${width}%`
    let timerId = setInterval(frame, 15)
    let startTime = new Date()
    let closeAfterMS = 3000
    let maxPercentage = 100
    function frame() {
        if(width === 0) {
            clearInterval(timerId)
        } else {
            const elapsedMilliseconds = new Date() - startTime
            width = (elapsedMilliseconds * maxPercentage) / closeAfterMS
            progressBar.style.width = `${width}%`
        }
    }

    const progressBarContainer = document.createElement('div')
    progressBarContainer.style.backgroundColor = '#00000033'
    progressBarContainer.style.height = '1rem'
    progressBarContainer.appendChild(progressBar)

    // if you interchange the order of these two appends, you can make the progress bar come at the top or bottom
    notificationBox.appendChild(progressBarContainer)
    notificationBox.appendChild(notificationBoxBody)

    document.body.appendChild(notificationBox)

    let notificationBoxRemoved = false

    notificationBox.onclick = () => {
        document.body.removeChild(notificationBox)
        notificationBoxRemoved = true
    }

    notificationBox.onmouseenter = () => {
        clearInterval(timerId)
        clearTimeout(timeoutId)
        const elapsedMilliseconds = new Date() - startTime
        closeAfterMS = closeAfterMS - elapsedMilliseconds
    }

    notificationBox.onmouseleave = () => {
        startTime = new Date()
        timerId = setInterval(frame, 15)
        timeoutId = setTimeout(removeNotificationBox, closeAfterMS)
    }

    function removeNotificationBox() {
        if(notificationBoxRemoved) {
            return
        }
        document.body.removeChild(notificationBox)
        notificationBoxRemoved = true
    }

    let timeoutId = setTimeout(removeNotificationBox, closeAfterMS)
}

export default {
    install: (app, options) => {
        app.config.globalProperties.$notify = {
            custom(backgroundColor, message) {
                showNotification(backgroundColor, message)
            },
            error(message) {
                showNotification('#bf3131', message)
            },
            success(message) {
                showNotification('green', message)
            }
        }

        app.provide('$notify', app.config.globalProperties.$notify)
    }
}
