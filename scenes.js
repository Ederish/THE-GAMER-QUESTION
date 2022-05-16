class gameover extends Phaser.Scene { constructor() { super({key: "gameover", active: true});}
create(){
this.add.rectangle(400,300,800,600, 0x000);
this.add.text(100,16,"Game Over",{fontFamily: "Arial Black", fontSize:100,color:"#e50000"}).setStroke('#fff',4)
this.add.text(400,300,"↻",{fontFamily: "Arial Black", fontSize:70,color:"#e50000"}).setStroke('#fff',4).setInteractive().on('pointerdown',()=>{
window.location.reload()})
}}
class levelUp extends Phaser.Scene { constructor() { super({key: "levelUp", active: true});}

preload(){
this.load.image('stick','assets/stick.png');
this.load.image('bloc','assets/bloc.png');
this.load.audio('coin','assets/coin.wav');
}
create(){
this.add.rectangle(400,300, 800, 600, 0x10e9c3)    
this.add.image(400,300,'stick');

const group = this.add.group({
setScale: { x:0.3, y:0.3},
key: 'bloc', frameQuantity:4,
frame: [0,1,2]
});
var blocks= group.getChildren();

Phaser.Actions.GridAlign(blocks, {
width:4,height:3,x:70,y:40,
cellWidth:125, cellHeight:125,
}); 
for(let block of blocks){
block.setInteractive().on('pointerdown',()=>{
block.destroy(),this.sound.add('coin').play();
this.input.activePointer.isDown= false;

setTimeout(()=>{
this.scene.sendToBack()
pre.setAlpha(1);
btn1.setAlpha(1);
btn2.setAlpha(1);
btn3.setAlpha(1);
btn4.setAlpha(1);
timedEvent.start();
this.scene.play()
},1000)})
}}}
class winner extends Phaser.Scene { constructor() { super({key: "winner", active: true});}
 preload (){
this.load.image('coins', 'assets/coin.png');
this.load.audio('coin','assets/coin.png')
} 
create (){
this.add.rectangle(400,300,800,600, 0xa10897);
this.add.text(100,16,"You Winner",{fontFamily:"Arial Black", fontSize:100,color:"#efb810"}).setStroke('#fff',8)
audio.pause()

for (var i = 0; i < 64; i++){
this.physics.add.image(Phaser.Math.Between(0,800),Phaser.Math.Between(0,600),'coins')
.setGravityY(600).setDisplaySize(40,40).setCollideWorldBounds(true).setBounce(1);
}}}
