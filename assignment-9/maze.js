$(function () {
    let isGameStarted = false;

    $("#start").click(function () {
        startGame();
    });

    $("#end").click(function () {
        if (isGameStarted) {
            $("#status").text("You win! Click S to restart.");
            isGameStarted = false;
        }
    });

    function startGame() {
        isGameStarted = true;
        $("#maze .boundary").css("background", "#eeeeee");
        $("#status").text("Game started . . .");

        $(".boundary").on("mouseenter.game", function () {
            if (isGameStarted) gameOver();
        });

        $("#maze").on("mouseleave.game", function () {
            if (isGameStarted) gameOver();
        });
    }

    function gameOver() {
        $("#maze .boundary").css("background", "red");
        $("#status").text("You lost! Click S to restart.");
        isGameStarted = false;
        $(".boundary").off("mouseenter.game");
        $("#maze").off("mouseleave.game");
    }
    document.getElementById('homeButton').onclick = function () {
        window.location.href = '/cs472';
    };
})();
