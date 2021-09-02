const prompterEl = document.getElementById("prompter");
const oldLinesEl = document.getElementById("old");

let role = "Senator";

const lines = [
    "I do solemnly affirm",
    "that I will faithfully execute",
    `the office of $ROLE`,
    "of the UMBC Student Government Association,",
    "and will, to the best of my ability,",
    "promote and defend",
    "the interests and well-being",
    "of UMBC’s undergraduate students."
];

/**
 * Initalize UI components.
 */
(function iniUI() {
    document.onkeydown = e => {
        if (e.code == "ArrowUp")
        {
            console.log("Prev line");
        }
        else if (e.code == "ArrowDown" || e.code == "Enter")
        {
            animateNextLine();
        }
    }

    animateNextLine();

    role = prompt("What is the name of the role you are confirming?") || role;
})();

/**
 * Animate the next line in the prompter.
 */
function animateNextLine() {
    // if still has more lines within the prompter
    if (lines.length)
    {
        // get the previous prompter line and animate it
        const prevHeader = prompterEl.lastChild;

        if (prevHeader)
        {
            // move previous header to the old lines element
            prompterEl.removeChild(prevHeader);
            oldLinesEl.appendChild(prevHeader);

            // scroll to the bottom of the old liens element
            oldLinesEl.scrollTop = oldLinesEl.scrollHeight;

            prevHeader.classList.add("fade-out");
        }

        // create header for the prompter line
        const nextHeader = document.createElement("h1");
        nextHeader.textContent = lines.shift();

        if (nextHeader.textContent.includes("$ROLE"))
        {
            nextHeader.textContent = nextHeader.textContent.replace("$ROLE", role);
        }

        // add the line to the prompter element
        prompterEl.appendChild(nextHeader);
    }
}