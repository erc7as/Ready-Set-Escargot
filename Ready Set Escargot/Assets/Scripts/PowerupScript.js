#pragma strict
var icon : Sprite;
var hitplayer = false;

function Start () {
	gameObject.GetComponent(SpriteRenderer).sprite = icon;
}

function Trigger(trig:Collider2D){
	if(trig.tag =="player"){
		//hitplayer = true;
		Destroy(trig.gameObject);
	}
	else{
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