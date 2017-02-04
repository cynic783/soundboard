(function() {
    var clipsDiv = document.getElementById('clips');
    var clipDataArr = [
        {
            desc: "I broke my back",
            files : [
                {
                    fileName: "i_broke_my_back.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "i_broke_my_back.aac",
                    audioFormat: "aac"
                }
            ]
        },
        {
            desc: "Spinal",
            files : [
                {
                    fileName: "spinal.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "spinal.aac",
                    audioFormat: "aac"
                }
            ]
        },
        {
            desc: "That's not how it works",
            files : [
                {
                    fileName: "thats_not_how_it_works.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "thats_not_how_it_works.aac",
                    audioFormat: "aac"
                }
            ]
        },
        {
            desc: "That's not how any of this works",
            files : [
                {
                    fileName: "thats_not_how_any_of_this_works.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "thats_not_how_any_of_this_works.aac",
                    audioFormat: "aac"
                }
            ]
        },
        {
            desc: "Do it live",
            files : [
                {
                    fileName: "do_it_live.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "do_it_live.aac",
                    audioFormat: "aac"
                }
            ]
        },
        {
            desc: "Do it (Shia)",
            files : [
                {
                    fileName: "do_it_shia.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "do_it_shia.aac",
                    audioFormat: "aac"
                }
            ]
        },
        {
            desc: "Yes you can (Shia)",
            files : [
                {
                    fileName: "yes_you_can_shia.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "yes_you_can_shia.aac",
                    audioFormat: "aac"
                }
            ]
        },
        {
            desc: "Enjoy the show",
            files : [
                {
                    fileName: "enjoy_the_show.ogg",
                    audioFormat: "ogg"
                },
                {
                    fileName: "enjoy_the_show.aac",
                    audioFormat: "aac"
                }
            ]
        }
    ];
    
    for(var i = 0; i < clipDataArr.length; i++) {
        new function() {
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
            
            for(var j = 0; j < clipData.files.length; j++) {
                var file = clipData.files[j];
                var sourceElem = document.createElement('source');
                sourceElem.setAttribute('src', file.fileName);
                sourceElem.setAttribute('type', 'audio/' + file.audioFormat);
                audioElem.appendChild(sourceElem);
                audioElem.preload = 'auto';
            }
            var prev = null;
            clipDiv.addEventListener('click', function() {
                if (prev !== null) {
                    prev.pause();
                }
                var cloned = audioElem.cloneNode(true);
                cloned.play();
                prev = cloned;
            });
        }();
    }
}());