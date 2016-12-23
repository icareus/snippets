SHORTHANDS

dt = null

// prepare page
clearChildren()
// Main div init
d = elem('DIV')
resize(d, '640px', '480px')
d.style.margin = '20px auto'
addBorder(d)

// Canvas init
c = Canvas(640, 480)
ctx = c.getContext('2d')
d.appendChild(c)

// fileReader init
file = null
imgOutput = new Image()
reader = new FileReader()
reader.onloadstart = e => {
    console.log(e, 'fileReader load started')
}
reader.onload = e => {
    log(e, 'onLoad')
    file = e.target.result
    imgOutput.src = file
    ctx.drawImage(imgOutput, 0, 0)
}

// append main div to body
body.appendChild(d)

// window drag/drop events
onDrag = ev => log(ev).preventDefault()
d.addEventListener('dragover', onDrag)

onDrop = ev => {
    log(ev, 'DROP !').preventDefault()
    dt = log(ev.dataTransfer)
    log(reader.readAsDataURL(dt.files[0]))
}
d.addEventListener('drop', onDrop)
