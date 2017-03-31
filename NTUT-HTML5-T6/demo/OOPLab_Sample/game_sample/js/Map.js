var GameMap = function(){
    this.PH = 0;
    this.PW = 0;


    this.load = function(){
        this.HI = new Framework.Sprite(define.imagePath + 'HI.png');
        this.KI = new Framework.Sprite(define.imagePath + 'KI.png');
        this.MITU = new Framework.Sprite(define.imagePath + 'MITU.png');
        this.HIKIRI = new Framework.Sprite(define.imagePath + 'HIKARI.png');
        this.YAMI = new Framework.Sprite(define.imagePath + 'YAMI.png');
        this.HATO = new Framework.Sprite(define.imagePath + 'HATO.png');
        this.BACK = new Framework.Sprite(define.imagePath + 'touch_area.jpg');
    };

    this.random = function(){
        return Math.round(Math.random()*5.4);
    };

    this.moveBall=-1;


    this.map = [[this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()],
                [this.random(),this.random(),this.random(),this.random(),this.random(),this.random()]];


    this.initialize =function(){

    };
    this.update = function(){

    };

    this.clear = function(){
        var x=1;
        var y=1;
        var z=0;
        var helper=1;
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
                if(this.map[i][j]!=-1){
                 //   while(helper<=1){
                        z=this.map[i][j];
                        if(j+x<=5){
                        while(z===this.map[i][j+x]){
                            x++;
                            if(j+x===6){break;}
                        }
                        x=x-1;
                        if(x>=2){
                            this.map[i][j]=-1;
                            while(x!=0){
                                this.map[i][j+x]=-1;
                                x--;
                            }
                        }
                        x=1;
                      }
                        if(i+y<=4){
                        while(z===this.map[i+y][j]){
                            y++;
                            if(i+y===5){break;}
                        }
                        y=y-1;
                        if(y>=2){
                            this.map[i][j]=-1;
                            while(y!=0){
                                this.map[i+y][j] =-1;
                                y--;
                            }
                        }
                        y=1;
                      }
                   // }
                }
            }
        }



    };

    this.remake = function(){
        for(var i=4; i>=0; i--){
            for(var j=5; j>=0; j--){

            }
        }
    };


    this.draw =function(ctx){
        var picP ={
        x:700,
        y:400,
        }
        this.BACK.position=picP;
        this.BACK.draw(ctx);
        for(var i=0; i<5; i++){
            for(var j=0; j<6; j++){
                var picP ={
                           x:450+ 100*j,
                           y:200+ 100*i,
                }
                switch(this.map[i][j]){
                    case 0:
						this.HI.position=picP;
						this.HI.draw(ctx);
                        break;
                    case 1:
                        this.KI.position=picP;
                        this.KI.draw(ctx);
                        break;
                    case  2:
                        this.MITU.position=picP;
                        this.MITU.draw(ctx);
                        break;
                    case   3:
                        this.HIKIRI.position=picP;
                        this.HIKIRI.draw(ctx);
                        break;
                    case  4:
                        this.YAMI.position=picP;
                        this.YAMI.draw(ctx);
                        break;
                    case   5:
                        this.HATO.position=picP;
                        this.HATO.draw(ctx);
                        break;
                    case   -1:
                        break;
                }

            }
        }
    };


	this.mouseup = function(e) {
		//this.isTouchArrow = false;
	};

	this.mousedown = function(e) {
//var k = 0 ;
//		var l = 0 ;
		for(var i=0; i<5; i++){
			for(var j=0; j<6; j++){
				if (e.x > 400+ 100*j &&e.x < 500+ 100*j && e.y > 150+ 100*i && e.y < 250+ 100*i) {
				    this.moveBall = this.map[i][j] ;
				   // this.map[i][j] = -1 ;

                    //this.draw(ctx);
				    this.PH=i;
				    this.PW=j;
				}
			}
		}
        //console.log(e.x, e.y);

	};

this.mousemove = function(e) {

    for(var i=0; i<5; i++){
        for(var j=0; j<6; j++){
            if (e.x > 400+ 100*j &&e.x < 500+ 100*j && e.y > 150+ 100*i && e.y < 250+ 100*i) {

                this.map[this.PH][this.PW]=this.map[i][j]  ;
                this.map[i][j] = this.moveBall;
                //this.draw(ctx);
                this.PH=i;
                this.PW=j;
            }
        }
    }


   // console.log(e.x, e.y);
   /** var k = 0 ;
    var l = 0 ;
           switch(this.moveBall){
            case 0:
                this.HI.position=e;
               // this.HI.draw(ctx);
                break;
            case 1:
                this.KI.position=e;
               // this.KI.draw(ctx);
                break;
            case  2:
                this.MITU.position=e;
               // this.MITU.draw(ctx);
                break;
            case   3:
                this.HIKIRI.position=e;
               // this.HIKIRI.draw(ctx);
                break;
            case  4:
                this.YAMI.position=e;
               // this.YAMI.draw(ctx);
                break;
            case   5:
                this.HATO.position=e;
               // this.HATO.draw(ctx);
                break;
        }
    for(var i=0; i<5; i++){
        for(var j=0; j<6; j++){
           // if (e.x > 50+ 100*j &&e.x < 150+ 100*j && e.y > 50+ 100*i && e.y < 50+ 100*j) {
               // var map[i][j] = this.map[k][l] ;
               // this.map[k][l] = -1 ;
               // k=i;
               // l=j;
          //  }
        }
    }**/
};

}
