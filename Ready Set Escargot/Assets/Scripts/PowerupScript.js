#pragma strict
var powerup:Sprite;

//var hitplayer = false;

function Start (){
	print("starting");	
}

function OnTriggerEnter2D(trig: Collider2D){
	if(trig.tag == "powerup"){
		//hitplayer = true;
		Destroy(trig.gameObject);
		print("Powerup Destroyed");
	}
	else{
	print("Problem still here :P");
	}
}
/*
function OnCollision2D(coll:Collision2D){
	if(hitplayer == true){
		
	}
	else{
	}	
}
*/
function Update () {

}