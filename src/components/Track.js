import React, {Component} from 'react';
import { PlayButton, Progress, Timer, Icons } from 'react-soundplayer/components';


export default class Track extends Component {

  render() {
    const { track, soundCloudAudio, playing, seeking, currentTime, duration } = this.props;
    const {
        SoundCloudLogoSVG,
        PlayIconSVG,
        PauseIconSVG,
        NextIconSVG,
        PrevIconSVG 
    } = Icons;
    const currentProgress = this.props.currentTime / this.props.duration * 100 || 0;

    console.log('Icons:', Icons);

    return (
      <div className="player">
        <PlayButton className="orange-button" soundCloudAudio={soundCloudAudio} playing={playing} seeking={seeking} />
        <Timer duration={duration} className="timer" soundCloudAudio={soundCloudAudio} currentTime={currentTime} />
        <div className="track-info">
          <h2 className="track-title">{track && track.title}</h2>
          <h3 className="track-user">{track && track.user && track.user.username}</h3>
        </div>
        <Progress className="progress-container" innerClassName="progress" soundCloudAudio={soundCloudAudio} value={currentProgress} />
      </div>
    );
  }
}