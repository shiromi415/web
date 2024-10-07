function changeSong() {
    var audioPlayer = document.getElementById('audio-player');
    var audioSource = document.getElementById('audio-source');
    var songSelect = document.getElementById('song-select');
    
    // 取得選擇的歌曲
    var selectedSong = songSelect.value;
    
    // 更新音樂檔案的來源
    audioSource.src = selectedSong;
    
    // 重新載入新的音樂檔案，並嘗試播放
    audioPlayer.load();
    audioPlayer.play();
}
