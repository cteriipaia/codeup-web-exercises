"use strict";
(() => {
    console.log(GH_KEY)

    function getLastCommitDate(username, key){
        fetch('https://api.github.com/users/${username}/events/public', {headers: {'Authorization': `token ${key}`}}).then(resp => resp.json()).then(events => {
            for (let event of events) {
                if (event.type === "PushEvent") {
            console.log (event.created_at);
            return event.payload.commits [0].url
                }
            }
        }).then (url => fetch(url,{headers:{'Authorization': `token ${key}`}})).then(resp =>resp.json()).then (data=> {
            console.log(new Date(data.commit.author.date));
        });
    }
    getLastCommitDate("cteriipaia", GH_KEY);
})();
