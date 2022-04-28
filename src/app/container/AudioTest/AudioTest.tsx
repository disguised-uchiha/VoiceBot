import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./AudioTest.module.scss";

const AudioTest = () => {
  const [audioElement, setAudioElement] = useState<any>();
  const [audioElementSource, setAudioElementSource] = useState<any>();

  useEffect(() => {
    setAudioElement(document.getElementsByClassName("audio-element")[0]);
    setAudioElementSource(document.getElementsByClassName("audio-element")[0].getElementsByTagName("source")[0]);
  }, [])


  const audioRecorder = {
    audioBlobs: [] as Blob[], /*of type Blob[]*/
    mediaRecorder: null as (MediaRecorder | null), /*of type MediaRecorder*/
    streamBeingCaptured: null as (MediaStream | null), /*of type MediaStream*/
    start: function () {
      if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
        return Promise.reject(new Error('mediaDevices API or getUserMedia method is not supported in this browser.'));
      }
      else {
        return navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
          audioRecorder.streamBeingCaptured = stream;
          audioRecorder.mediaRecorder = new MediaRecorder(stream);
          audioRecorder.audioBlobs = [];
          audioRecorder.mediaRecorder.addEventListener("dataavailable", event => {
            audioRecorder.audioBlobs.push(event.data);
          });
          audioRecorder.mediaRecorder.start();
        });
      }
    },
    stop: function (): Promise<Blob> {
      return new Promise(resolve => {
        let mimeType = audioRecorder.mediaRecorder?.mimeType;
        audioRecorder.mediaRecorder?.addEventListener("stop", () => {
          let audioBlob = new Blob(audioRecorder.audioBlobs, { type: mimeType });
          resolve(audioBlob);
        });

        audioRecorder.mediaRecorder?.stop();
        audioRecorder.stopStream();
        audioRecorder.resetRecordingProperties();
      });
    },
    stopStream: function () {
      audioRecorder.streamBeingCaptured?.getTracks().forEach(track => track.stop());
    },
    cancel: function () {
      audioRecorder.mediaRecorder?.stop();
      audioRecorder.stopStream();
      audioRecorder.resetRecordingProperties();
    },
    resetRecordingProperties: function () {
      audioRecorder.mediaRecorder = null;
      audioRecorder.streamBeingCaptured = null;
    }
  }
  const startAudioRecording = () => {
    audioRecorder.start()
      .then(() => { //on success
        console.log("Recording Audio...")
      })
      .catch(error => { //on error
        if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
          console.log("To record audio, use browsers like Chrome and Firefox.");
          //Error handling structure
          switch (error.name) {
            case 'AbortError': //error from navigator.mediaDevices.getUserMedia
              console.log("An AbortError has occured.");
              break;
            case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
              console.log("A NotAllowedError has occured. User might have denied permission.");
              break;
            case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
              console.log("A NotFoundError has occured.");
              break;
            case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
              console.log("A NotReadableError has occured.");
              break;
            case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
              console.log("A SecurityError has occured.");
              break;
            case 'TypeError': //error from navigator.mediaDevices.getUserMedia
              console.log("A TypeError has occured.");
              break;
            case 'InvalidStateError': //error from the MediaRecorder.start
              console.log("An InvalidStateError has occured.");
              break;
            case 'UnknownError': //error from the MediaRecorder.start
              console.log("An UnknownError has occured.");
              break;
            default:
              console.log("An error occured with the error name " + error.name);
          };
        }
      });
  }


  const stopAudioRecording = () => {
    console.log("Stopping Audio Recording...")
    audioRecorder.stop()
      .then(audioAsblob => {
        console.log("stopped with audio Blob:", audioAsblob);
        playAudio(audioAsblob);

        //Do something with the recorded audio
        //...
      })
      .catch(error => {
        //Error handling structure
        switch (error.name) {
          case 'InvalidStateError': //error from the MediaRecorder.stop
            console.log("An InvalidStateError has occured.");
            break;
          default:
            console.log("An error occured with the error name " + error.name);
        };
      });
  }
  const cancelAudioRecording = () => {
    console.log("Canceling audio...");
    audioRecorder.cancel();
  }

  const createSourceForAudioElement = () => {
    let sourceElement = document.createElement("source");
    audioElement.appendChild(sourceElement);
    document.getElementsByClassName("audio-element")[0].getElementsByTagName("source")[0] = sourceElement;
  }

  const playAudio = (recorderAudioAsBlob: Blob) => {
    //read content of files (Blobs) asynchronously
    let reader = new FileReader();
    reader.onload = (e) => {
      let base64URL = e.target?.result;
      if (!audioElementSource)
        createSourceForAudioElement();
      audioElementSource.src = base64URL as string;
      let BlobType = recorderAudioAsBlob.type.includes(";") ?
        recorderAudioAsBlob.type.substr(0, recorderAudioAsBlob.type.indexOf(';')) : recorderAudioAsBlob.type;
      audioElementSource.type = BlobType
      audioElement.load();
      console.log("Playing audio...");
      audioElement.play();
    };
    reader.readAsDataURL(recorderAudioAsBlob);
  }
  return (
    <div className={styles.container}>
      <audio controls className="audio-element hide">
      </audio>
      <Button onClick={startAudioRecording}>Start</Button>
      <Button onClick={stopAudioRecording}>Stop</Button>
    </div>
  )
}

export default AudioTest
