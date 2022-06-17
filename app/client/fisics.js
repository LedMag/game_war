'use strick';

class Collision {

  checkCollision(o1, o2) {
    let dx = o2.pos.x - o1.pos.x
    let dy = o2.pos.y - o1.pos.y
    let d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
    if(d < o1.radius + o2.radius){
      return {
        collisionInfo: {'o1': o1, 'o2': o2, dx, dy, d},
        collided: true
      }
    }
    return {
      collisionInfo: null,
      collided: false
    }
  }

  resolveCollision(info){ // "info" - это объект Collision из предыдущего примера
    if(!info.collided) return;
    let nx = info.collisionInfo.dx / info.collisionInfo.d // вычисляем векторы
    let ny = info.collisionInfo.dy / info.collisionInfo.d
    let s = info.collisionInfo.o1.radius + info.collisionInfo.o2.radius - info.collisionInfo.d // вычисляем глубину проникновения
    info.collisionInfo.o1.pos.x -= nx * s/2 // сдвигаем первый объект на половину величины столкновения
    info.collisionInfo.o1.pos.y -= ny * s/2
    info.collisionInfo.o2.pos.x += nx * s/2 // сдвигаем второй объект в противоположную сторону
    info.collisionInfo.o2.pos.y += ny * s/2
  }

  resolveCollisionWithBounce(info){
    if(!info.collided) return;
    let nx = info.collisionInfo.dx / info.collisionInfo.dy
    let ny = info.collisionInfo.dy / info.collisionInfo.d
    let s = info.collisionInfo.o1.radius + info.collisionInfo.o2.radius - info.collisionInfo.d

    info.collisionInfo.o1.pos.x -= nx * s/2
    info.collisionInfo.o1.pos.y -= ny * s/2
    info.collisionInfo.o2.pos.x += nx * s/2
    info.collisionInfo.o2.pos.y += ny * s/2

    let k = -2*((info.collisionInfo.o2.vx - info.collisionInfo.o1.vx) * nx + (info.collisionInfo.o2.vy - info.collisionInfo.o1.vy) * ny) / (1/(s/2) + 1/(s/2))
    info.collisionInfo.o1.vx -= k * nx / s/2
    info.collisionInfo.o1.vy -= k * ny / s/2
    info.collisionInfo.o2.vx += k * nx / s/2
    info.collisionInfo.o2.vy += k * ny / s/2
}

}

export { Collision };
