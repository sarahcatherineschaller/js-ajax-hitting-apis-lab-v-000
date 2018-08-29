const rootURL = "https://api.github.com"

function getRepositories() {
  const name = document.getElementById("username").value;
  const address = rootURL + "/users/" + name + "/repos";
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayRepositories)
  req.open("GET", address)
  req.send()
  return false;
}

function displayRepositories() {
  const repos = JSON.parse(this.responseText);
  const repoList = repos.map(function(repo) {
    const listUsername = repo.owner.login
    const listRepoName = repo.name
    return (`
      <ul>
        <li>
          <h2>${repo.name}</h2>
          <a href="${repo.html_url}">${repo.html_url}</a><br>
          <a href="#" onclick="getCommits(this)">Get Commits</a><br>
          <a href="#" onclick="getBranches(this)">Get Branches</a><br>
        </li>
      </ul>`
    );
  }).join("")
  document.getElementById("repositories").innerHTML = repoList
};

function getCommits(el) {
  const repoName = el.dataset.repository
  const address = rootURL + "/repos/" + el.dataset.username + "/" + repoName + "/commits"
  const req = new XMLHttpRequest()

  req.addEventListener("load, displayCommits")
  req.open("GET", address)
  req.send()
  return false;
};

function displayCommits() {
}

function getBranches() {
}

function displayBranches() {

}
