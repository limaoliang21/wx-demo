
function DieFish(images,type){
	Sprite.call(this,images['fish'+type]);
	this.width = FISH_SIZE[type].width;
	this.height = FISH_SIZE[type].height;
	this.die = 0;
	this.goDie();
}
DieFish.prototype = new Sprite();
DieFish.prototype.constructor = DieFish;
DieFish.prototype.goDie = function(){
	var _this = this;
	this.sx = 4*this.width;
	clearInterval(this.timer);
	this.timer = setInterval(function(){
		_this.sx += _this.width;
		_this.sx = _this.sx%(_this.width*4)+_this.width*4;
		
	},120);
	setTimeout(function(){
		_this.die = 1;
		clearInterval(_this.timer);
	},1000);
	
	
};