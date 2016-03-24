#pragma strict

var leftButton = KeyCode.LeftArrow;
var rightButton = KeyCode.RightArrow;
var downButton = KeyCode.DownArrow;
var upButton = KeyCode.UpArrow;
var maxSpeed : float = 3.0;
var acceleration : int = 5;
var forceVector : Vector2 = Vector2(0,0);


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
}