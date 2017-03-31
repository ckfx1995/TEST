var MyMenu = Framework.exClass(Framework.GameMainMenu , {
            //初始化loadingProgress需要用到的圖片
    initializeProgressResource: function() {
        this.loading = new Framework.Sprite(define.imagePath + 'loading.jpg');
        this.loading.position = {x: Framework.Game.getCanvasWidth() / 2 , y: Framework.Game.getCanvasHeight() / 2};
        //為了或得到this.loading這個Sprite的絕對位置, 故需要先計算一次(在Game Loop執行時, 則會自動計算, 但因為loadingProgress只支援draw故需要自行計算)
    },

    //在initialize時會觸發的事件
    loadingProgress: function(ctx, requestInfo) {
        //console.log(Framework.ResourceManager.getFinishedRequestPercent())
        this.loading.draw(ctx);
        ctx.font ='90px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(Math.round(requestInfo.percent) + '%' , ctx.canvas.width / 2 , ctx.canvas.height / 2 + 300);
    },

    load: function() {
        this.menu = new Framework.Sprite(define.imagePath + 'padmenu.jpg');
    },

    initialize: function() {
       Framework.Game.audio.play({name: 'GameStart', loop: true});
      //menu background
        this.menu.position = {
            x: Framework.Game.getCanvasWidth() / 2,
            y: Framework.Game.getCanvasHeight() / 2
        };
        this.menu.scale = 2;
        this.rootScene.attach(this.menu);

        this.rectPosition = {
            x: Framework.Game.getCanvasWidth() / 2 - 130,
            y: Framework.Game.getCanvasHeight() / 2
        };
        //menu background
    },

    update:function(){
        //this.rootScene.update();一定要在第一行
        this.rootScene.update();
        //目前的Framework, 當任何一個GameObject不做attach時, 則必須要自行update
    },

    draw: function(parentCtx) {
        //this.rootScene.draw();一定要在第一行
        //this.rootScene.draw();
        //可支援畫各種單純的圖形和字
        this.rootScene.draw(parentCtx);

        parentCtx.font = '70pt bold';
        parentCtx.fillStyle = 'withe';
        parentCtx.textBaseline = 'top';
        parentCtx.textAlign = 'center';
        parentCtx.fillText('START', this.rectPosition.x + 130, this.rectPosition.y, 260);
    },


    click:function(e){
        //Framework.Game.goToNextLevel();
        Framework.Game.goToNextLevel();
    },
});
