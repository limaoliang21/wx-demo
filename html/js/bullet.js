
var BULLET_SIZE = [
	null,
	{sx:86,sy:0,width:24,height:26},
	{sx:61,sy:0,width:25,height:29},
	{sx:32,sy:35,width:27,height:31},
	{sx:30,sy:82,width:29,height:33},
	{sx:0,sy:82,width:30,height:34},
	{sx:30,sy:0,width:31,height:35},
	{sx:0,sy:44,width:32,height:38}
];
function Bullet(img,type){
	Sprite.call(this,img);
	this.sx = BULLET_SIZE[type].sx;
	this.sy = BULLET_SIZE[type].sy;
	this.width = BULLET_SIZE[type].width;
	this.height = BULLET_SIZE[type].height;
	this.iSpeed = 6;
	this.type = type;
}
Bullet.prototype = new Sprite();
Bullet.prototype.constructor = Bullet;












