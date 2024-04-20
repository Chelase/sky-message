import './style.css'
const body = document.body
let topOffset = 0

export default {
    info (msg) {
        create(
            msg,
            'alert alert-info z-50 animation-top',
            'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        )
    },
    success (msg) {
        create(
            msg,
            'alert alert-success z-50 animation-top',
            'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        )
    },
    warning (msg) {
        create(
            msg,
            'alert alert-warning z-50 animation-top',
            'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
        )
    },
    error (msg) {
        create(
            msg,
            'alert alert-error z-50 animation-top',
            'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
        )
    },
}

const create = (msg, className, d) => {
    const Alert = document.createElement('div')
    Alert.className = className
    Alert.style.position = 'fixed'
    Alert.style.top = `${topOffset}px`
    Alert.role = 'alert'

    topOffset += 65

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'stroke-current shrink-0 h-6 w-6')
    svg.setAttribute('fill', 'none')
    svg.setAttribute('viewBox', '0 0 24 24')
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    path.setAttribute('stroke-linecap', 'round')
    path.setAttribute('stroke-linejoin', 'round')
    path.setAttribute('stroke-width', '2')
    path.setAttribute('d', d)
    svg.appendChild(path)
    const span = document.createElement('span')
    span.textContent = msg

    Alert.appendChild(svg)
    Alert.appendChild(span)
    body.appendChild(Alert)

    setTimeout(() => {
        Alert.remove()
        topOffset -= 65 // 移除元素时减去相应的上边距
        updateNextElementPosition()
    }, 3000)
}

const updateNextElementPosition = () => {
    const elements = document.querySelectorAll('.alert')
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.top = `${parseInt(elements[i].style.top) - 65}px`
    }
}