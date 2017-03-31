var ChooseCharacter = Framework.Class(Framework.Level , {

            load: function(){
               this.background=new Framework.Sprite(define.imagePath + 'chooseCHBG.jpg');
               this.start=new Framework.Sprite(define.imagePath + 'start.jpg');
               this.reset=new Framework.Sprite(define.imagePath + 'reset.jpg');
               this.c =[ new Framework.Sprite(define.imagePath + 'c1.png'),new Framework.Sprite(define.imagePath + 'c2.png'),new Framework.Sprite(define.imagePath + 'c3.png'),new Framework.Sprite(define.imagePath + 'c4.png'),new Framework.Sprite(define.imagePath + 'c5.png')];
               this.number=[ new Framework.Sprite(define.imagePath + '1.png'),new Framework.Sprite(define.imagePath + '2.png'),new Framework.Sprite(define.imagePath + '3.png'),new Framework.Sprite(define.imagePath + '4.png'),new Framework.Sprite(define.imagePath + '5.png')];

               this.previousTouch = { x: 0, y: 0 };
               this.currentTouch = { x: 0, y: 0 };
               this.count=0;
                //background
                this.background.position = {
                    x: Framework.Game.getCanvasWidth() / 2,
                    y: Framework.Game.getCanvasHeight() / 2
                };
                this.background.scale = 2;
                this.rootScene.attach(this.background);
                //background
                //start button
                this.start.scale = 1;
                this.start.position = {
                   x: Framework.Game.getCanvasWidth()/2+500,
                   y: Framework.Game.getCanvasHeight()/3+300
                };
                this.rootScene.attach(this.start);
                //start button
                //reset button
                this.reset.scale = 1;
                this.reset.position = {
                   x: Framework.Game.getCanvasWidth()/2-500,
                   y: Framework.Game.getCanvasHeight()/3+300
                };
                this.rootScene.attach(this.reset);
                //reset button
                //character
                for(var i=0;i<5;i++){
                     this.c[i].scale = 2;
                     this.c[i].position = {
                        x: Framework.Game.getCanvasWidth()/5+(200*i),
                        y: Framework.Game.getCanvasHeight() / 4
                };}
                for(var i=0;i<5;i++){
                  this.rootScene.attach(this.c[i]);
                }
                //character
                //number
                for(var i=0;i<5;i++){
                     this.number[i].scale = 1;
                     this.number[i].position = {
                        x:-60,
                        y:-60
                };}
                for(var i=0;i<5;i++){
                  this.rootScene.attach(this.number[i]);
                }
                //number
            },


           update:function(){
           this.rootScene.update();
           },

           draw: function(parentCtx) {
           this.rootScene.draw(parentCtx);

           },

           mousedown: function(e) {
           //選擇角色順序,存入全域變數 temp
           this.currentTouch = { x: e.x , y: e.y };
           for(var i=0;i<5;i++){
              if(this.count>=5) break;
              if(this.currentTouch.x>=this.c[i].position.x-60 && this.currentTouch.x<=this.c[i].position.x+60 && this.currentTouch.y>=this.c[i].position.y-65 && this.currentTouch.y<=this.c[i].position.y+65 ){
                if(i===0) {
                  temp[this.count]=i;
                  this.number[this.count].position = {
                     x: Framework.Game.getCanvasWidth()/5+(200*i),
                     y: Framework.Game.getCanvasHeight() / 4+100};
                temp[this.count]=i;this.count++;}
                if(i===1) {
                  temp[this.count]=i;
                  this.number[this.count].position = {
                     x: Framework.Game.getCanvasWidth()/5+(200*i),
                     y: Framework.Game.getCanvasHeight() / 4+100};
                temp[this.count]=i;this.count++;}
                if(i===2) {
                  temp[this.count]=i;
                  this.number[this.count].position = {
                     x: Framework.Game.getCanvasWidth()/5+(200*i),
                     y: Framework.Game.getCanvasHeight() / 4+100};
                temp[this.count]=i;this.count++;}
                if(i===3) {
                  temp[this.count]=i;
                  this.number[this.count].position = {
                     x: Framework.Game.getCanvasWidth()/5+(200*i),
                     y: Framework.Game.getCanvasHeight() / 4+100};
                temp[this.count]=i;this.count++;}
                if(i===4) {
                  temp[this.count]=i;
                  this.number[this.count].position = {
                     x: Framework.Game.getCanvasWidth()/5+(200*i),
                     y: Framework.Game.getCanvasHeight() / 4+100};
                temp[this.count]=i;this.count++;}
              }
           }
           //選擇角色順序,存入全域變數 temp

           //檢查是否按在start x+-=65,y+-=164;是:nextlevel
           if(this.currentTouch.x>=this.start.position.x-164 && this.currentTouch.x<=this.start.position.x+164 && this.currentTouch.y>=this.start.position.y-65 && this.currentTouch.y<=this.start.position.y+65 ){
             Framework.Game.audio.stopAll();
             Framework.Game.goToNextLevel();//65 164
           }
           //檢查是否按在start x+-=65,y+-=164;是:nextlevel

           //檢查是否按在reset x+-100 y+x63
           if(this.currentTouch.x>=this.reset.position.x-100 && this.currentTouch.x<=this.reset.position.x+100 && this.currentTouch.y>=this.reset.position.y-63 && this.currentTouch.y<=this.reset.position.y+63 ){
             this.count=0;
             temp=[-1,-1,-1,-1,-1];
             for(var i=0;i<5;i++){
                  this.number[i].position = {
                     x:-60,
                     y:-60
             };}
           }
           //檢查是否按在reset x+-100 y+x63
           },

           });
