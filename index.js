const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const map = new Image()
map.src = './Tiled/Town.png'
const player = new Image()
player.src = './Images/playerDown.png'

class Sprite {
	constructor(pos, image){
		this.pos = pos
		this.image = image
	}
	draw(){
		c.drawImage(this.image, this.pos.x, this.pos.y)
	}
}
const background = new Sprite ({x: -1000, y:-600}, map)

let keys = {
	w: {pressed:false},
	a: {pressed:false},
	s: {pressed:false},
	d: {pressed:false}
}

function animate(){
	window.requestAnimationFrame(animate)
	background.draw()
	c.drawImage(player,
		0,
		0,
		player.width/4,
		player.height, 
		canvas.width/2 - player.width/4, 
		canvas.height/2 - player.height/2,
		player.width/4,
		player.height
	)
	if (keys.w.pressed)background.pos.y +=4
	else if (keys.s.pressed)background.pos.y -=4
	if (keys.a.pressed)background.pos.x +=4
	else if (keys.d.pressed)background.pos.x -=4
}
animate()

window.addEventListener('keydown', (e) => {
	switch(e.key){
	case 'w':
		keys.w.pressed = true
		break
	case 'a':
		keys.a.pressed = true
		break
	case 's':
		keys.s.pressed = true
		break
	case 'd':
		keys.d.pressed = true
		break
	}
})
window.addEventListener('keyup', (e) => {
	switch(e.key){
	case 'w':
		keys.w.pressed = false
		break
	case 'a':
		keys.a.pressed = false
		break
	case 's':
		keys.s.pressed = false
		break
	case 'd':
		keys.d.pressed = false
		break
	}
})