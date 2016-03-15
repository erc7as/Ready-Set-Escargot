#pragma strict
var maxSpeed : float = 3.0;
var acceleration : int = 5;


function Start () {
	acceleration = 5;
	maxSpeed = 3.0;
}



function Update () {

if (Input.GetKey(KeyCode.LeftArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.x = -speed;
    //transform.Translate(Vector2(-1, 0) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(-1,0)*acceleration);
}
if (Input.GetKey(KeyCode.RightArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.x = speed;
    //transform.Translate(Vector2(1, 0) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(1,0)*acceleration);
}
if (Input.GetKey(KeyCode.DownArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.y = -speed;
    //transform.Translate(Vector2(0, -1) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(0,-1)*acceleration);
}
if (Input.GetKey(KeyCode.UpArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.y = speed;
    //transform.Translate(Vector2(0, 1) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(0,1)*acceleration);
}

if(GetComponent.<Rigidbody2D>().velocity.magnitude >= maxSpeed){
//	print("Over max speed!");
    GetComponent.<Rigidbody2D>().velocity = GetComponent.<Rigidbody2D>().velocity.normalized * maxSpeed;
}
//print(GetComponent.<Rigidbody2D>().velocity.magnitude);
}