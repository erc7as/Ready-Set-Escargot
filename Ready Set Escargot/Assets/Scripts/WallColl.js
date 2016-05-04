#pragma strict
var source: AudioSource;
var scream1 : AudioClip;
var scream2 : AudioClip;
var scream3 : AudioClip;
var scream4 : AudioClip;
var scream5: AudioClip;
var click: AudioClip;
var collision: AudioClip;
var slip: AudioClip;
var screams = [scream1,scream2,scream3,scream4,scream5];
var snail1: GameObject;
var snail2: GameObject;
var snail3: GameObject;


function Start () {

}

function Update () {

}

function OnTriggerEnter2D(trig: Collider2D){
	if(trig.tag == "powerup"){
    	source.clip = collision;
    	source.Play();
    	}
	else if(trig.tag == "slime"){
    	source.clip = slip;
    	source.Play();
    	}
    else if (trig.tag == "shell") {
    	source.clip = scream1;
    	source.Play();
    	}
    else if (trig.tag == "Player"){
    	source.clip = scream2;
    	source.Play();

    }
    else if(trig.tag=="wall"){
    	source.clip = collision;
    	source.Play();
    }
}