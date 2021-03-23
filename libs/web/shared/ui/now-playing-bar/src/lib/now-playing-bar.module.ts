import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingBarComponent } from './now-playing-bar.component';
import { PlayerControlsModule } from '@angular-spotify/web/shared/ui/player-controls';
import { TrackCurrentInfoModule } from '@angular-spotify/web/shared/ui/track-current-info';
import { PlayerPlaybackModule } from '@angular-spotify/web/shared/ui/player-playback';
import { PlayerVolumeModule } from '@angular-spotify/web/shared/ui/player-volume';
@NgModule({
  imports: [
    CommonModule,
    PlayerControlsModule,
    PlayerPlaybackModule,
    TrackCurrentInfoModule,
    PlayerVolumeModule
  ],
  declarations: [NowPlayingBarComponent],
  exports: [NowPlayingBarComponent]
})
export class NowPlayingBarModule {}