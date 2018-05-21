let appState = {
    togglePressed: false,
    headerCollapsed: true,
}

let headerCollapse = function() {
    // Stop pulsating since the toggle has been acknowledged.
    appState.togglePressed = true;
    let headerToggle = document.getElementById("header-toggle-icon");
    headerToggle.setAttribute("pressed", appState.togglePressed);

    let header = document.getElementById("smallscreen-info-pane");
    header.setAttribute("show", appState.headerCollapsed);
    header.setAttribute("pressed", appState.headerCollapsed);
    appState.headerCollapsed = !appState.headerCollapsed;
}

/**
 * Register events for the webpage.
 */
let registerEvents = function() {
    document.getElementById("header-toggle").addEventListener("click", headerCollapse);
}
