let resumeButton = document.querySelector("button");

resumeButton.addEventListener("click", function(){
    // window.open("https://docs.google.com/document/d/1TdFoiaaqPmsX7kZdH7mlBWvy-wlhGo3lfOWgIVXQ6xk/edit#heading=h.xngoztqg2w5j", "_blank");
});
resumeButton.addEventListener("mouseover", function(){
    resumeButton.style.backgroundColor = 'rgb(237, 191, 76)';
    resumeButton.style.cursor = 'pointer'; 

    resumeButton.addEventListener("mouseout", function(){
        resumeButton.style.backgroundColor = 'goldenrod'
    });
});

