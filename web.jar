function changeSong() {
    var audioPlayer = document.getElementById('audio-player');
    var audioSource = document.getElementById('audio-source');
    var songSelect = document.getElementById('song-select');
    
    // 取得選擇的歌曲
    var selectedSong = songSelect.value;
    
    // 更新音樂檔案
    audioSource.src = selectedSong;
    audioPlayer.load();  // 重新載入新的音樂
    audioPlayer.play();  // 自動播放新音樂
}
