export default function getBaseUrl() {
    // const inDevelopment = window.location.hostname === 'localhost';
    // return inDevelopment ? 'http://localhost:8001/' : '/';
    return getQueryStringParameterByName('userMockApi') ? 'http://localhost:8001/' : '/';
}

function getQueryStringParameterByName(name, url) {
    if(!url) url = window.location.href;
    name = name.replace(/[[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
