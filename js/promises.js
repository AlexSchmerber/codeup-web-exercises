(async function () {

    function usersLastCommit (userName) {
        return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_API_KEY}})
            .then(response => response.json())
            .then(function (data) {
                let time = data[0].created_at
                let date = time.substring(6, 10) + '-' + time.substring(0, 4)
                let mTime = time.substring(12, 19)
                mTime = mTime.split(':');
                let hours = Number(mTime[0]);
                let minutes = Number(mTime[1]);
                let timeValue;
                if (hours > 0 && hours <= 12) {
                    timeValue= "" + hours;
                } else if (hours > 12) {
                    timeValue= "" + (hours - 12);
                } else if (hours == 0) {
                    timeValue= "12";
                }

                timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
                timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
                return date + ' ' + timeValue
            })
            .catch(error => console.error(error));
    };
    let value = await usersLastCommit("AlexSchmerber");
    console.log(value)
})();