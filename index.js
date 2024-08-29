const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillRect(0, 0, canvas.width, canvas.height)

const map = new Image()
map.src = '/Applications/Pokemon Game/Tiled/Town.png'

map.onload = () => {
	c.drawImage(map, -1000, -570)
}
