class BallBas{
    constructor(x,y){
        var opt = {
            isStatic: true
        }
        this.r = 50;
        this.speed = 0.05;
//        this.body = add.rectangle(x,y,30,30,opt);
        this.imageBall = loadImage("Imgs/Ball.png");
//        World.add(world, this.body);
    }
    displayBall(){
        push()
        imageMode(CENTER);
        image(this.imageBall,135,270,20,20);
        pop()
    }
}