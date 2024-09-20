document.addEventListener('DOMContentLoaded', function () {
    let randomPlayer = document.getElementById('random-player');
    let randomPlayerName = document.getElementById('random-player-name');
    let randomPlayerImage = document.getElementById('random-player-img');
    let thumbnail = document.getElementById('thumbnail');
    let playerHolder = document.getElementById('player-holder');
    let exit = document.getElementById('exit');
    let counter = 0;
    let thumbnail2 = document.getElementById('thumbnail2');

    randomPlayer.addEventListener('click', function () { 
        thumbnail2.style.display = 'none';
        randomPlayer.classList.add('expanded');
        exit.style.display = 'block';
        playerHolder.style.display = 'flex';
        playerHolder.style.flexDirection = 'column';
        player = new Player;

        let players = new Array(6);
        // initialize players first

        let i = 0;

        function loadNextImage() {
            if (i < 6) {
                let playerName = player.randomPlayer();
                let imageName = playerName.replace(/\s/g, '');
                let imageSrc = "NBA/" + imageName + ".avif";
                let img = new Image();
                img.src = imageSrc;
                img.onload = function() {
                    players[i] = playerName;
                    i++;
                    loadNextImage();
                };
                img.onerror = function() {
                    loadNextImage();
                };
            } else {
                console.log(players);
            }
        }

        loadNextImage();

        let j = 0;


        let timer = setInterval(function () { 

            let playerName = players[j];
            let imageName = playerName.replace(/\s/g, '');
            let imageSrc = "NBA/" + imageName + ".avif";

            randomPlayerName.style.display = 'block';
            randomPlayerName.style.flexDirection = 'column';
            randomPlayerName.style.justifyContent = 'flex-end';

            randomPlayerName.innerText = playerName;
            randomPlayerImage.style.display = "flex";
            randomPlayerImage.src = imageSrc;

            j++;

            if (j > 5) {
                clearInterval(timer);
                counter = 0;
            }

            /* 
            let playerName = player.randomPlayer();
    
            randomPlayerName.style.display = 'block';
            randomPlayerName.style.flexDirection = 'column';
            randomPlayerName.style.justifyContent = 'flex-end';

            let imageName = playerName.replace(/\s/g, '');
            let imageSrc = "NBA/" + imageName + ".avif";

            let img = new Image();
            img.src = imageSrc;

            img.onload = function() {
                randomPlayerName.innerText = playerName;
                randomPlayerImage.style.display = "flex";
                randomPlayerImage.src = imageSrc;

                counter++;
            };

            img.onerror = function() {
            };

    

            if (counter >= 6) {
                clearInterval(timer);
                counter = 0;
            }
            */
        }, 200);
    })

    exit.addEventListener('click', function () {
        thumbnail2.style.display = 'block';
        event.stopPropagation();
        randomPlayer.classList.remove('expanded');
        playerHolder.style.display = 'none';
        randomPlayerName.style.display = "none";
        randomPlayerImage.style.display = "none";
        exit.style.display = 'none';
    })
});
