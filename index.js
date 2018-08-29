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
}

function getCommits() {
}

function displayCommits() {
}

function getBranches() {
}

function displayBranches() {

}
