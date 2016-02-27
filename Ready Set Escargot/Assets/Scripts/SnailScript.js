#pragma strict
var speed : int = 10;



function Start () {


}



function Update () {

if (Input.GetKey(KeyCode.LeftArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.x = -speed;
    //transform.Translate(Vector2(-1, 0) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(-1,0));
}
if (Input.GetKey(KeyCode.RightArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.x = speed;
    //transform.Translate(Vector2(1, 0) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(1,0));
}
if (Input.GetKey(KeyCode.DownArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.y = -speed;
    //transform.Translate(Vector2(0, -1) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(0,-1));
}
if (Input.GetKey(KeyCode.UpArrow)) {
	//GetComponent.<Rigidbody2D>().velocity.y = speed;
    //transform.Translate(Vector2(0, 1) * Time.deltaTime*speed);
    GetComponent.<Rigidbody2D>().AddForce(Vector2(0,1));
}




}