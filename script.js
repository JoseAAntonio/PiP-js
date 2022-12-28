const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//NOTE - Prompt to select media stream, pass to videoElement, then play
const selectMediaScreen = async () => {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		console.log("an error has ocurred", error);
	}
};

button.addEventListener("click", async () => {
	//disable Button
	button.disabled = true;
	//Start PiP
	await videoElement.requestPictureInPicture();
	//reset button
	button.disabled = false;
});

selectMediaScreen();
