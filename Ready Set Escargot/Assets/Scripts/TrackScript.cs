using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class TrackScript : MonoBehaviour {
    public float x1;
    public float y1;
    public float x2;
    public float y2;
    public float x3;
    public float y3;
    public float x4;
    public float y4;



    string p1;
    string p2;
    string p3;
    string p4;

    public GameObject shelldon;
    public GameObject snonic;
    public GameObject snaileater;
    public GameObject ishsnail;
    public GameObject marshelle;
    public GameObject noot;
    public GameObject rocky;
    public GameObject witty;

    

    // Use this for initialization
    void Start () {
        p1 = Globals.PLAYER1;
        if (Globals.numPlayers > 1) p2 = Globals.PLAYER2;
        if (Globals.numPlayers > 2) p3 = Globals.PLAYER3;
        if (Globals.numPlayers > 3) p4 = Globals.PLAYER4;

        GameObject play1;
        GameObject play2;
        GameObject play3;
        GameObject play4;

        if (p1 == "shelldon") play1 = Instantiate(shelldon, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;
        else if (p1 == "snonic") play1 = Instantiate(snonic, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;
        else if (p1 == "snaileater") play1 = Instantiate(snaileater, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;
        else if (p1 == "ishsnail") play1 = Instantiate(ishsnail, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;
        else if (p1 == "marshelle") play1 = Instantiate(marshelle, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;
        else if (p1 == "noot") play1 = Instantiate(noot, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;
        else if (p1 == "rocky") play1 = Instantiate(rocky, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;
        else play1 = Instantiate(witty, new Vector3(x1, y1, 0), Quaternion.identity) as GameObject;

        play1.GetComponent<Text>().text = "1";
        

        if (Globals.numPlayers > 1)
        {
            if (p2 == "shelldon") play2 = Instantiate(shelldon, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;
            else if (p2 == "snonic") play2 = Instantiate(snonic, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;
            else if (p2 == "snaileater") play2 = Instantiate(snaileater, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;
            else if (p2 == "ishsnail") play2 = Instantiate(ishsnail, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;
            else if (p2 == "marshelle") play2 = Instantiate(marshelle, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;
            else if (p2 == "noot") play2 = Instantiate(noot, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;
            else if (p2 == "rocky") play2 = Instantiate(rocky, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;
            else play2 = Instantiate(witty, new Vector3(x2, y2, 0), Quaternion.identity) as GameObject;

            play2.GetComponent<Text>().text = "2";
        }
        if (Globals.numPlayers > 2)
        {
            if (p3 == "shelldon") play3 = Instantiate(shelldon, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;
            else if (p3 == "snonic") play3 = Instantiate(snonic, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;
            else if (p3 == "snaileater") play3 = Instantiate(snaileater, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;
            else if (p3 == "ishsnail") play3 = Instantiate(ishsnail, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;
            else if (p3 == "marshelle") play3 = Instantiate(marshelle, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;
            else if (p3 == "noot") play3 = Instantiate(noot, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;
            else if (p3 == "rocky") play3 = Instantiate(rocky, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;
            else play3 = Instantiate(witty, new Vector3(x3, y3, 0), Quaternion.identity) as GameObject;

            play3.GetComponent<Text>().text = "3";
        }
        if (Globals.numPlayers > 3)
        {
            if (p4 == "shelldon") play4 = Instantiate(shelldon, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;
            else if (p4 == "snonic") play4 = Instantiate(snonic, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;
            else if (p4 == "snaileater") play4 = Instantiate(snaileater, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;
            else if (p4 == "ishsnail") play4 = Instantiate(ishsnail, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;
            else if (p4 == "marshelle") play4 = Instantiate(marshelle, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;
            else if (p4 == "noot") play4 = Instantiate(noot, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;
            else if (p4 == "rocky") play4 = Instantiate(rocky, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;
            else play4 = Instantiate(witty, new Vector3(x4, y4, 0), Quaternion.identity) as GameObject;

            play4.GetComponent<Text>().text = "4";
        }


    }
	
	// Update is called once per frame
	void Update () {
	
	}
}
