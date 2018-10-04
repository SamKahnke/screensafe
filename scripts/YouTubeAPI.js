// JavaScript Document

// Start global variables
var yTarget;
var yDoAutoplay;
var yVidID;
var yCallback = null;
var yDone = false;
var yPlayer;
var yDomain = null;
var yWidth = "640";
//var yHeight = "480";
var yHeight = "360";
var InitialPathSelect = '<option value="0">&lt;Select path&gt;</option>';
var InitialPathDescription = '<em>(Select a track to view path options and descriptions)</em>';
var protocol = location.protocol;
var host = location.host; 

if (protocol.indexOf("file") < 0) {
     yDomain = protocol+"//"+host;
}

function LoadYouTubeVideo(target, autoplay, vidID, callback) {
	try {
		// Start check of function parameters
		if (typeof(target) == "undefined" || target == "") {
			console.log("LoadYouTubeVideo() function error: missing target parameter");
			alert("LoadYouTubeVideo() function error: missing target parameter");
			return;
		}
		var temp = document.getElementById(target);
		if (temp == null) {
			console.log("LoadYouTubeVideo() function error: target parameter is invalid, could not find the element with id '"+target+"'");
			alert("LoadYouTubeVideo() function error: target parameter is invalid, could not find the element with id '"+target+"'");
			return;
		}
		yTarget = target;
		if (typeof(autoplay) == "undefined") {
			console.log("LoadYouTubeVideo() function error: missing autoplay parameter");
			alert("LoadYouTubeVideo() function error: missing autoplay parameter");
			return;
		}
		if (autoplay == true) {
			yDoAutoplay = 1;
		} else {
			yDoAutoplay = 0;
		}
		if (typeof(vidID) == "undefined" || vidID == "") {
			console.log("LoadYouTubeVideo() function error: missing vidID parameter");
			alert("LoadYouTubeVideo() function error: missing vidID parameter");
			return;
		}
		yVidID = vidID;
		if (typeof(callback) != "undefined" && callback != null) {
			yCallback = callback;
		}
		// End check of function parameters
		
		var tag = document.createElement('script');
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		yDone = false;
	}
	catch(e) {
		console.log("Error in LoadYouTubeVideo() function: "+e.message);
		alert("Error in LoadYouTubeVideo() function: "+e.message);
	}
}

function onYouTubeIframeAPIReady() {
	try {
		yPlayer = new YT.Player(yTarget, {
			height: yHeight,
			width: yWidth,
			videoId: yVidID,
			playerVars: {autohide:1,rel:0,showinfo:0,enablejsapi:1,autoplay:yDoAutoplay,origin:yDomain},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	}
	catch(e) {
		console.log("Error in onYouTubeIframeAPIReady() function: "+e.message);
		alert("Error in onYouTubeIframeAPIReady() function: "+e.message);
	}
}

function onPlayerReady(event) {
	// If we need to do something when the player is ready, put the code here
}

function onPlayerStateChange(event) {
	try {
		if (event.data == YT.PlayerState.ENDED && !yDone) {
			yDone = true;
			if (typeof(yCallback) != "undefined" && yCallback != null) {
				try {
					yCallback();
				}
				catch(e) {
					console.log("Error in onPlayerStateChange() function calling callback: "+e.message);
					alert("Error in onPlayerStateChange() function calling callback: "+e.message);
				}
			}
		}
	}
	catch(e) {
		console.log("Error in onPlayerStateChange() function: "+e.message);
		alert("Error in onPlayerStateChange() function: "+e.message);
	}
}
