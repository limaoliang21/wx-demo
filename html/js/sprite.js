
function Sprite(img){
	this.img = img;
	this.sx = 0;
	this.sy = 0;
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.r = 0;
	this.iSpeed = 0;
}
Sprite.prototype.draw = function(gd){
	gd.save();
	gd.beginPath();
	gd.translate(this.x,this.y);
	gd.rotate(d2a(this.r));
	gd.drawImage(
		this.img,
		this.sx,this.sy,this.width,this.height,
		-this.width/2,-this.height/2,this.width,this.height
	);
	gd.restore();
}
Sprite.prototype.move = function(){
	var iSpeedX = Math.sin(d2a(this.r))*this.iSpeed;
	var iSpeedY = -Math.cos(d2a(this.r))*this.iSpeed;
	this.x+=iSpeedX;
	this.y+=iSpeedY;
};
Sprite.prototype.collTest = function(obj){
	//this<==>obj
	var a = this.x-obj.x;
	var b = this.y-obj.y;
	
	if(Math.sqrt(a*a+b*b)<30){
		return true;
	}else{
		return false;
	}
};








