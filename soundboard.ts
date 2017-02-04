(function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/data.json', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var clipDataArr = JSON.parse(request.responseText);
            doWorkSon(clipDataArr);
        }
    };
    request.send();

    function doWorkSon(clipDataArr) {
        var clipsDiv = document.getElementById('clips');
        for (var i = 0; i < clipDataArr.length; i++) {
            new function () {
                var clipData = clipDataArr[i];
                var clipDiv = document.createElement('div');
                clipDiv.className = 'clip';
                clipsDiv.appendChild(clipDiv);
                var clipSpan = document.createElement('span');
                clipSpan.textContent = clipData.desc;
                clipSpan.className = 'noselect';
                clipDiv.appendChild(clipSpan);
                var audioElem = document.createElement('audio');
                clipDiv.appendChild(audioElem);

                for (var j = 0; j < clipData.files.length; j++) {
                    var file = clipData.files[j];
                    var sourceElem = document.createElement('source');
                    sourceElem.setAttribute('src', 'data/' + file.fileName);
                    sourceElem.setAttribute('type', 'audio/' + file.audioFormat);
                    audioElem.appendChild(sourceElem);
                    audioElem.preload = 'auto';
                }
                var prev = null;
                clipDiv.addEventListener('click', function () {
                    if (prev !== null) {
                        prev.pause();
                    }
                    var cloned = audioElem.cloneNode(true);
                    cloned.play();
                    prev = cloned;
                });
            }();
        }
    }
}());