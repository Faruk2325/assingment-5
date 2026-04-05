 const query =
    searchInput.value.toLowerCase();

    const filtered =
    allIssues.filter(issue =>

        issue.title
        .toLowerCase()
        .includes(query)

        ||

        issue.description
        .toLowerCase()
        .includes(query)

    );

    displayIssues(filtered);

});

window.addEventListener("load", () =>{

    loader.classList.remove("hidden");

    setTimeout(() =>{

        loader.classList.add("hidden");

    },500);

});

loadIssue();