
    function toggleText() {
        var visibleText = document.getElementById("visibleText");
        var hiddenText = document.getElementById("hiddenText");

        if (hiddenText.style.display === "none") {
            hiddenText.style.display = "block";
        } else {
            hiddenText.style.display = "none";
        }
    }
