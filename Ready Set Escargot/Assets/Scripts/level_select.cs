using UnityEngine;
using System.Collections;


public class level_select : MonoBehaviour {
	public bool level1;
	public bool level2;
	public bool ret_main;
	public bool quit;
		void OnMouseUp(){
		if (level1 == true) {
			Application.LoadLevel (2);
		} else if (level2 == true) {
			Application.LoadLevel (3);
		} else if (ret_main == true) {
			Application.LoadLevel (0);
		} else if (quit == true){
			Application.Quit();
		}
	}
	void OnMouseEnter(){
		Renderer.material.GetColor = Color.red;
	}
	void OnMouseExit(){
		Renderer.material.GetColor = Color.white;
	}
}
