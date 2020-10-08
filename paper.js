class paper
{
    constructor(x,y,r)
    {
        var options={
        isStactic:false,
        restitution:0.3,
        friction:0.5,
        dendity:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display()
        {
            var  paperpos =this.body.position;

            push()
            translate(paperpos.x,paperpos.y)
            rectMode(CENTER)
            strokeWeight(3);
            fill(255,0,255)
            ellipse(0,0,this.r,this.r)
            pop()
        }
    
    }