const pattern = "<div class='main-context_info_one'><h2>|name|</h2><p>|surname|</p></div>";

function othername() {
    let job = document.getElementById("job").value;
    console.log(job);
    let location = document.getElementById("location").value;
    console.log(location);
    let container = document.getElementById("info");

    fetch('https://api.dataatwork.org/v1/jobs/autocomplete?contains="' + job + '"').then(function(response) {
        return response.json();

    })
        .then(function(array) {
            array = array.slice(0,2);
            let html = '';
            array.forEach(function(item){

                html += pattern
                    .replace('|name|',item.normalized_job_title)
                    .replace('|surname|',item.suggestion);

            });

            container.innerHTML = html;

        });
}
