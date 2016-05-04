using UnityEngine;
using System.Collections;

public class RaceAudioManager : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
    void  Awake()
    {
        // see if we've got game music still playing
        GameObject gameMusic= GameObject.Find("AudioManager");
        if (gameMusic)
        {
            // kill game music
            Destroy(gameMusic);
        }
        // make sure we survive going to different scenes
    }
}
