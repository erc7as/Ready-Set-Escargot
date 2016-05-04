using UnityEngine;
using System.Collections;


public class UIManager : MonoBehaviour
{
    GameObject[] pauseObjects;
	AudioSource audio;
	public AudioClip click;
    // Use this for initialization
    void Start()
    {
        Time.timeScale = 1;
        pauseObjects = GameObject.FindGameObjectsWithTag("ShowOnPause");
        hidePaused();
		audio = GetComponent<AudioSource>();
    }

    // Update is called once per frame
    void Update()
    {

        //uses the p button to pause and unpause the game
        if (Input.GetKeyDown(KeyCode.P))
        {
            if (Time.timeScale == 1)
            {
                Time.timeScale = 0;
                showPaused();
            }
            else if (Time.timeScale == 0)
            {
                Debug.Log("high");
                Time.timeScale = 1;
                hidePaused();
            }
        }
    }


    //Reloads the Level
    public void Reload()
    {
        Application.LoadLevel(Application.loadedLevel);
    }

    //controls the pausing of the scene
    public void pauseControl()
    {
        if (Time.timeScale == 1)
        {
            Time.timeScale = 0;
            showPaused();
        }
        else if (Time.timeScale == 0)
        {
            Time.timeScale = 1;
            hidePaused();
        }
    }

    //shows objects with ShowOnPause tag
    public void showPaused()
    {
        foreach (GameObject g in pauseObjects)
        {
            g.SetActive(true);
        }
    }

    //hides objects with ShowOnPause tag
    public void hidePaused()
    {
        foreach (GameObject g in pauseObjects)
        {
            g.SetActive(false);
        }
    }

    //loads inputted level
    public void LoadLevel(string level)
    {
        if( level.Equals("Course_Select") && Globals.numPlayers == 0)
        {

        }
        else Application.LoadLevel(level);
    }

    public void QuitGame()
    {
        Application.Quit();
    }

    public void AssignPlayer(string snail)
    {
        
        if (Globals.numPlayers < 4)
        {
            if (Globals.numPlayers == 0)
            {
                Globals.PLAYER1 = snail;
            }
            else if (Globals.numPlayers == 1)
            {
                Globals.PLAYER2 = snail;
            }
            else if (Globals.numPlayers == 2)
            {
                Globals.PLAYER3 = snail;
            }
            else if (Globals.numPlayers == 3)
            {
                Globals.PLAYER4 = snail;
            }
            Globals.numPlayers++;
            Debug.Log(Globals.PLAYER1);
            Debug.Log(Globals.PLAYER2);
            Debug.Log(Globals.PLAYER3);
            Debug.Log(Globals.PLAYER4);
        }
    }	
    public void ResetPlayers()
    {
        Globals.numPlayers = 0;
    }	
}