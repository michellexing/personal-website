if (location.href.includes("resume.html")) {
    document.getElementById('download_button').onclick = function download() {
        location.href = "https://drive.google.com/file/d/1h5akCgkuNK7_6IuqvjmgSHZnqYUQ5ZA5/view"; 
    }
}
if (location.href.includes("portfolio.html")) {
    document.querySelector("#project1 img").onclick = function project1() {
        location.href = "http://web.stanford.edu/~mxing621/"; 
    }
    document.querySelector('#project1_button').onclick = function project1src() {
        location.href = "https://github.com/michellexing/personal-website"; 
    }
}
