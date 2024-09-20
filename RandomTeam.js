document.addEventListener('DOMContentLoaded', function () {
    let randomTeam = document.getElementById('random-team');
    let randomTeamName = document.getElementById('random-team-name');
    let randomTeamImage = document.getElementById('random-team-img');
    let teamHolder = document.getElementById('team-holder');
    let exit = document.getElementById('exit2');
    let counter = 0;
    let thumbnail = document.getElementById('thumbnail');
    let thumbnail2 = document.getElementById('thumbnail2');

    randomTeam.addEventListener('click', function () {
        thumbnail.style.display = 'none';
        randomTeam.classList.add('expanded');
        exit.style.display = 'block';
        teamHolder.style.display = 'flex';
        teamHolder.style.flexDirection = 'column';
        team = new Team;

        let timer = setInterval(function () {
            let teamName = team.randomTeam();
            randomTeamName.innerText = teamName;
            randomTeamName.style.display = 'block';
            randomTeamName.style.flexDirection = 'column';
            randomTeamName.style.justifyContent = 'flex-end';

            let imageName = teamName.replace(/\s/g, '');

            randomTeamImage.style.display = "flex";
            randomTeamImage.src = "NBATeams/" + imageName + ".webp";

            counter++;

            if (counter == 10) {
                clearInterval(timer);
                counter = 0;
            }
        }, 200);
    })

    exit.addEventListener('click', function () {
        event.stopPropagation();
        randomTeam.classList.remove('expanded');
        teamHolder.style.display = 'none';
        randomTeamName.style.display = "none";
        randomTeamImage.style.display = "none";
        exit.style.display = 'none';
        thumbnail.style.display = 'block';
    })
});