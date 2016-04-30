#pragma strict

var leftButton = KeyCode.LeftArrow;
var rightButton = KeyCode.RightArrow;
var downButton = KeyCode.DownArrow;
var upButton = KeyCode.UpArrow;
var toggleButton = KeyCode.Period;
var forceVector : Vector2 = Vector2(0,0);
var poweredUp : boolean = false;
var powerCounter : int = 0;
var slimy : boolean = false;
var slimyPatch : GameObject;
var powerUp : GameObject;
var shell : GameObject;
var player : String;
var finishCounter : int;
var onFinishLine : boolean = false;
var numLaps : int = 2;
var powerUpTime : float;
var absoluteControl : boolean = true;
var maxSpeed : float = 3.0;
var acceleration : int = 5;
var handling : int = 5;
var mass : float = 1;

function Start () {
	//acceleration = 5;
    //maxSpeed = 3.0;
}



function Update () {
    GetComponent.<Rigidbody2D>().mass = mass;
    var horizAxis : float = Input.GetAxis("Horizontal_"+player);
    var vertAxis : float = Input.GetAxis("Vertical_"+player);
    var horizAxis2 : float = Input.GetAxis("HorizRight_"+player);
    forceVector = Vector2(0,0);
    if(absoluteControl){
        forceVector = Vector2(horizAxis*acceleration,vertAxis*acceleration);
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
    }
    else{
        transform.eulerAngles.z -= horizAxis2*handling;
        forceVector = transform.eulerAngles.z * transform.up * vertAxis;
        if (Input.GetKey(leftButton)) {
            //GetComponent.<Rigidbody2D>().velocity.x = -speed;
            //transform.Translate(Vector2(-1, 0) * Time.deltaTime*speed);
            transform.eulerAngles.z += handling;
        }
        if (Input.GetKey(rightButton)) {
            //GetComponent.<Rigidbody2D>().velocity.x = speed;
            //transform.Translate(Vector2(1, 0) * Time.deltaTime*speed);
            transform.eulerAngles.z -= handling;
        }
        if (Input.GetKey(downButton)) {
            //GetComponent.<Rigidbody2D>().velocity.y = -speed;
            //transform.Translate(Vector2(0, -1) * Time.deltaTime*speed);
            forceVector = transform.eulerAngles.z * transform.up*-1;
        }
        if (Input.GetKey(upButton)) {
            //GetComponent.<Rigidbody2D>().velocity.y = speed;
            //transform.Translate(Vector2(0, 1) * Time.deltaTime*speed);
            forceVector = transform.eulerAngles.z * transform.up;

        }
        
    }
    if (Input.GetKeyDown(toggleButton) || Input.GetButtonDown("Back_"+player)){
        absoluteControl = !absoluteControl;
        print("Absolute Controls on player "+player+": " + absoluteControl);
    }
    
    
if(GetComponent.<Rigidbody2D>().velocity.magnitude >= maxSpeed){
//	print("Over max speed!");
    GetComponent.<Rigidbody2D>().velocity = GetComponent.<Rigidbody2D>().velocity.normalized * maxSpeed;
}
//print(GetComponent.<Rigidbody2D>().velocity.magnitude);

if(GetComponent.<Rigidbody2D>().velocity.magnitude > 0 && !slimy && absoluteControl){
    var rotateAngle : float = Vector2.Angle(Vector2.up,GetComponent.<Rigidbody2D>().velocity);
    if(GetComponent.<Rigidbody2D>().velocity.x > 0){
        rotateAngle = -rotateAngle;
    }
    transform.eulerAngles.z = rotateAngle;
}
forceVector = forceVector.normalized;
if(Vector2.Angle(GetComponent.<Rigidbody2D>().velocity,forceVector) > 90 && GetComponent.<Rigidbody2D>().velocity.magnitude > 0){
    forceVector = forceVector*handling;
}
GetComponent.<Rigidbody2D>().AddForce(forceVector*acceleration);
powerCounter += 1;
if (powerUpTime >= 2){
    powerUpTime = 0;
    poweredUp = false;
    print("Power End!");
}

if(!poweredUp){
    maxSpeed = 3.0;
    acceleration = 1;
    powerCounter = 0;
    slimy = false;
    onFinishLine = false;
}
else{
    powerUpTime += Time.deltaTime;
}
}

function OnTriggerEnter2D(trig: Collider2D){
    var powerUpPosition : Vector3 = trig.transform.position;
    if(trig.tag == "powerup"){
        powerUpTime = 0;
        var random : int = Random.value * 4 + 1;
        if (random == 1) {
            print("Speed Boost!");
            poweredUp = true;
            maxSpeed *= 1.5;
            acceleration *= 2;
        }
        else if (random == 2) {
            poweredUp = true;
            maxSpeed *= .75;
            acceleration *= .75;
            print("Slowdown!");
        }
        else if (random == 3) {
            print("Slime patch!");
            Instantiate(slimyPatch, transform.position - GetComponent.<Rigidbody2D>().velocity.normalized * 2,transform.rotation);
        }
        else if (random == 4) {
            print("Shell created!");
            var shellInstance : GameObject;
            shellInstance = Instantiate(shell, transform.position - GetComponent.<Rigidbody2D>().velocity.normalized, Quaternion.identity);
            shellInstance.GetComponent.<Rigidbody2D>().velocity = - GetComponent.<Rigidbody2D>().velocity.normalized*4;
            shellInstance.GetComponent.<Rigidbody2D>().velocity += new Vector3(Random.Range(1,3), Random.Range(1,3), 0);
        }
        //hitplayer = true;
        Destroy(trig.gameObject);
        print("Powerup Destroyed");
        yield WaitForSeconds(4);
        print("Powerup Respawn");
        Instantiate(powerUp, powerUpPosition, Quaternion.identity);
    }
    else if(trig.tag == "slime"){
        print("SLIMY SLOWDOWN");
        slimy = true;
        poweredUp = true;
        acceleration *= .25;
        Destroy(trig.gameObject);
        transform.rotation.z = Random.value * 360;
    }
    else if (trig.tag == "shell") {
        print("A shell hit you!");
        poweredUp = true;
        maxSpeed *= .75;
        acceleration *= .75;
        Destroy(trig.gameObject);
    }
    else if (trig.tag == "Finish" && GetComponent.<Rigidbody2D>().velocity.x > 0) {
        
        if (!onFinishLine) {
            finishCounter++;
            onFinishLine = true;
            print(player + " crosses the finish line!");
        }
        if (finishCounter >= numLaps) {
            print("You win!");
        }
    }
    else {
        //print("Problem still here :P");
    }
}