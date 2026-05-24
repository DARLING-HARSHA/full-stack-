fetch("http://localhost:5000/projects")
.then(res => res.json())
.then(data => {

    let output = "";

    data.forEach(project => {
        output += `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
        `;
    });

    document.getElementById("projects").innerHTML = output;
});
