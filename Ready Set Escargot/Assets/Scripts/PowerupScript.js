#pragma strict
var powerup:Sprite;

//var hitplayer = false;

function Start (){
	print("starting 2");	
}

function OnTriggerEnter2D(trig: Collider2D){
    if(trig.tag == "powerup"){

        var random : int = Random.value * 4 + 1;
        if (random == 1) {
            print("1");
        }
        else if (random == 2) {
            print("2");
        }
        else if (random == 3) {
            print("3");
        }
        else if (random == 4) {
            print("4");
        }
		//hitplayer = true;
		Destroy(trig.gameObject);
		print("Powerup Destroyed");
	}
	else{
	//print("Problem still here :P");
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