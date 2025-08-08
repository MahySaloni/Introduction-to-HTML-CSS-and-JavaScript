document.getElementById("recommendation-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("rec-name").value || "Anonymous";
    const message = document.getElementById("new-recommendation").value;
    
    const recList = document.getElementById("recommendation-list");
    const newDiv = document.createElement("div");
    newDiv.classList.add("recommendation");
    newDiv.textContent = `“${message}” – ${name}`;
    recList.appendChild(newDiv);
    
    document.getElementById("popup").classList.remove("hidden");
    
    document.getElementById("recommendation-form").reset();
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("hidden");
});
