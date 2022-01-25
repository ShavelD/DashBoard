let checkbox = document.querySelector('.theme-switch');
let audienceGraph = document.querySelector(".audience__graph");
let genderGraph = document.querySelector(".gender__graph");

checkbox.addEventListener ('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    audienceGraph.src = (audienceGraph.src.includes("audience_graph.svg")) ? 
    "./images/audience/audience_graph_dark.svg" : 
    "./images/audience/audience_graph.svg";

    genderGraph.src = (genderGraph.src.includes("gender_graph.svg")) ? 
    "./images/gender/gender_graph_dark.svg" : 
    "./images/gender/gender_graph.svg";
})
