const SHORTHANDS = true

console.log('#SHORTHANDS#')
console.log('Quicklog')
const log = (x, ...args) => (console.log(x, ...args), x)
log('body')
const body = document.body
log('elem()')
const elem = (type, ...options) => document.createElement(type, ...options)
log('clearChildren()')
const clearChildren = (element=body) => {
    let r = document.createRange()
    r.selectNodeContents(element)
    r.deleteContents()
}
log('addBorder(el)')
const addBorder = e => e.style.border = '5px dashed black'
log('Canvas(x, y)')
const Canvas = (width, height) => {
    const c = elem('CANVAS')
    c.width = width
    c.height = height
    return c
}
log('resize(el, x, y)')
const resize = (el, x, y) => {
    el.style.width = x;
    el.style.height = y;
}

'#END SHORTHANDS#'
