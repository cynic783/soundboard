(function() {


    const request = new XMLHttpRequest();
    request.open('GET', 'data/data.json', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            doWorkSon(JSON.parse(request.responseText));
        }
    };
    request.send();

    interface File {
        fileName:string;
        audioFormat:string;
    }

    interface Clip {
        desc:string;
        files:Array<File>;
    }

    function doWorkSon(clips:ReadonlyArray<Clip>) {
        const clipsDiv:HTMLElement = document.getElementById('clips');
        if (clipsDiv === null) {
            return;
        }
        for (let clip of clips) {
            new function () {
                const clipDiv = document.createElement('div');
                clipDiv.className = 'clip';
                clipsDiv.appendChild(clipDiv);
                const clipSpan = document.createElement('span');
                clipSpan.textContent = clip.desc;
                clipSpan.className = 'noselect';
                clipDiv.appendChild(clipSpan);
                const audioElem = document.createElement('audio');
                clipDiv.appendChild(audioElem);

                for (let file of clip.files) {
                    const sourceElem = document.createElement('source');
                    sourceElem.setAttribute('src', 'data/' + file.fileName);
                    sourceElem.setAttribute('type', 'audio/' + file.audioFormat);
                    audioElem.appendChild(sourceElem);
                    audioElem.preload = 'auto';
                }
                let prev = null;
                clipDiv.addEventListener('click', function () {
                    if (prev !== null) {
                        prev.pause();
                    }
                    const cloned:Node = audioElem.cloneNode(true);
                    (cloned as HTMLAudioElement).play();
                    prev = cloned;
                });
            }();
        }
    }
}());