﻿#pragma strict

var leftButton = KeyCode.LeftArrow;
var rightButton = KeyCode.RightArrow;
var downButton = KeyCode.DownArrow;
var upButton = KeyCode.UpArrow;
var maxSpeed : float = 3.0;
var acceleration : int = 5;
var forceVector : Vector2 = Vector2(0,0);
var poweredUp : boolean = false;
var powerCounter : int = 0;
var player : String;


function Start () {
	//acceleration = 5;
	//maxSpeed = 3.0;
}



function Update () {
    forceVector = Vector2(0,0);
if (Input.GetKey(leftButton)) {
	//GetComponent.<Rigidbody2D>().velocity.x = -speed;
    //transform.Translate(Vector2(-1, 0) * Time.deltaTime*speed);
    forceVector += Vector2(-1,0);
}
if (Input.GetKey(rightButton)) {
	//GetComponent.<Rigidbody2D>().velocity.x = speed;
    //transform.Translate(Vector2(1, 0) * Time.deltaTime*speed);
    forceVector += Vector2(1,0);
}
if (Input.GetKey(downButton)) {
	//GetComponent.<Rigidbody2D>().velocity.y = -speed;
    //transform.Translate(Vector2(0, -1) * Time.deltaTime*speed);
    forceVector += Vector2(0,-1);
}
if (Input.GetKey(upButton)) {
	//GetComponent.<Rigidbody2D>().velocity.y = speed;
    //transform.Translate(Vector2(0, 1) * Time.deltaTime*speed);
    forceVector += Vector2(0,1);
}

if(GetComponent.<Rigidbody2D>().velocity.magnitude >= maxSpeed){
//	print("Over max speed!");
    GetComponent.<Rigidbody2D>().velocity = GetComponent.<Rigidbody2D>().velocity.normalized * maxSpeed;
}
//print(GetComponent.<Rigidbody2D>().velocity.magnitude);

if(GetComponent.<Rigidbody2D>().velocity.magnitude > 0){
    var rotateAngle : float = Vector2.Angle(Vector2.up,GetComponent.<Rigidbody2D>().velocity);
    if(GetComponent.<Rigidbody2D>().velocity.x > 0){
        rotateAngle = -rotateAngle;
    }
    transform.eulerAngles.z = rotateAngle;
}
GetComponent.<Rigidbody2D>().AddForce(forceVector*acceleration);
powerCounter += 1;
if (powerCounter >= 120){
    poweredUp = false;
    print("Power End!");
}

if(!poweredUp){
    maxSpeed = 3.0;
    acceleration = 1;
    powerCounter = 0;
}
}

function OnTriggerEnter2D(trig: Collider2D){
    if(trig.tag == "powerup"){

        var random : int = Random.value * 4 + 1;
        if (random == 1) {
            print("Speed Boost!");
            poweredUp = true;
            maxSpeed *= 1.5;
            acceleration *= 2;
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
    else if (trig.tag == "Finish" && forceVector.x > 0){
        print(player + " crosses the finish line!");
    }
}