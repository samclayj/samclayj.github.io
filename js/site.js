let appState = {
    headerCollapsed: true,
}

let headerCollapse = function() {
    let header = document.getElementById("smallscreen-info-pane");
    header.setAttribute("show", appState.headerCollapsed);
    appState.headerCollapsed = !appState.headerCollapsed;
}

/**
 * Register events for the webpage.
 */
let registerEvents = function() {
    document.getElementById("header-toggle").addEventListener("click", headerCollapse);
}
