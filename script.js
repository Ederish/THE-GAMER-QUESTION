var config = {
type: Phaser.AUTO,
parent: 'content',
physics: { default:'arcade', arcade:{ debug:false}},
backgroundColor:'#10e9c3',
width: 800, height: 600,
dom: {createContainer: true},
scale: {mode: Phaser.Scale.ENVELOVED},
scene:{preload:preload,create:create,update:update}
};
var game = new Phaser.Game(config);
var bg;var Score=9; 
var btn1;var btn2;
var btn3;var btn4;
var time=10;var t;
var level=12;var pre;
function preload (){
this.load.css('styles','style.css');
this.load.json('json', 'preguntas.json');
this.load.image('bg','assets/fondo.jpg');
this.load.audio('music','assets/music.mp3');
this.load.audio('win','assets/win.wav');
this.load.audio('fail','assets/fail.mp3');
}
function create (){
bg=this.add.tileSprite(400,300,0,0,'bg').setScrollFactor(0).setDisplaySize(800,600);
audio = this.sound.add('music',{loop:true}); audio.play();

this.scene.add('levelUp',new levelUp);
this.scene.sendToBack('levelUp')
this.scene.add('gameover',new gameover)
this.scene.moveDown('gameover')


correcto =()=>{time=10
timedEvent.destroy()
btn1.setClassName('correcto');
btn1.setScale(1.1)
this.sound.add('win').play(),
c1.destroy(),c2.destroy(),c3.destroy(),c4.destroy(),
setTimeout(()=>{container.destroy();ep()},2000)
}
gameOver =()=>{
audio.pause(),
c1.destroy(),c2.destroy(),c3.destroy(),c4.destroy(),
setTimeout(()=>{this.scene.remove(),container.destroy()},3000)
}
ep=()=>{
timedEvent = this.time.addEvent({ delay: 3000, callback: Timer,repeat:11});
data=this.cache.json.get('json')[Phaser.Math.Between(0,99)]
var azar = [230,300,370,440].sort(() => 0.5 - Math.random());
s=this.add.text(16,16,"score"+" "+Score++,{fontFamily: "Arial Black", fontSize:40,color:"#e50000"}).setStroke('#fff',4)
l=this.add.text(620,520,"Nivel"+" "+level,{fontFamily: "Arial Black", fontSize:40,color:"#e50000"}).setStroke('#fff',4)
t=this.add.text(16,520,"Time "+time,{fontFamily: "Arial Black", fontSize:40,color:"#e50000"}).setStroke('#fff',4)

c1=this.add.dom(168,azar[0],'div',null,`${data["respuesta"]}`).setClassName('btn').setInteractive().setAlpha(0).on('pointerdown',()=>{correcto()});
c2=this.add.dom(168,azar[1],'div',null,`${data["respuesta"]}`).setClassName('btn').setInteractive().setAlpha(0).on('pointerdown',()=>{this.sound.add('fail').play(),gameOver(),btn2.setClassName('incorrecto'),btn1.setClassName('correcto')});
c3=this.add.dom(168,azar[2],'div',null,`${data["respuesta"]}`).setClassName('btn').setInteractive().setAlpha(0).on('pointerdown',()=>{this.sound.add('fail').play(),gameOver(),btn3.setClassName('incorrecto'),btn1.setClassName('correcto')});
c4=this.add.dom(168,azar[3],'div',null,`${data["respuesta"]}`).setClassName('btn').setInteractive().setAlpha(0).on('pointerdown',()=>{this.sound.add('fail').play(),gameOver(),btn4.setClassName('incorrecto'),btn1.setClassName('correcto')});
    
pre= this.add.dom(400, 130,'div',null,`${data["pregunta"]}`).setClassName('encabezado');
btn1 = this.add.dom(400,azar[0],'div',null,`${data["respuesta"]}`).setClassName('btn').setInteractive();
btn2 = this.add.dom(400,azar[1],'div',null,`${data["incorrecta1"]}`).setClassName('btn').setInteractive();
btn3 = this.add.dom(400,azar[2],'div',null,`${data["incorrecta2"]}`).setClassName('btn').setInteractive();
btn4 = this.add.dom(400,azar[3],'div',null,`${data["incorrecta3"]}`).setClassName('btn').setInteractive();

container=this.add.container(0,0).add([pre,btn1,btn2,btn3,btn4,c1,c2,c3,c4,s,l,t]);
if(Score %11==0){
this.scene.bringToTop('levelUp')
pre.setAlpha(0);level++
btn1.setAlpha(0);
btn2.setAlpha(0);
btn3.setAlpha(0);
btn4.setAlpha(0);
timedEvent.stop()
}else if(level>12){
this.scene.add('winner', new winner)
this.scene.remove()
this.scene.BringToTop('winner')


pre.setAlpha(1);
btn1.setAlpha(1);
btn2.setAlpha(1);
btn3.setAlpha(1);
btn4.setAlpha(1);
}},ep()}
function update(){
bg.tilePositionX -=+1;
bg.tilePositionY -=+1;

if(time==-1){
gameOver()
btn1.setClassName('correcto')
}}
function Timer(){
t.setText('Time '+ time--)}