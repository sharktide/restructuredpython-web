<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RestructuredPython Docs</title>
    <script>
        function loadDocs() {
            let path = window.location.pathname.replace("/docs", "");
            path = window.location.pathname.replace(".html", "");
            path = window.location.pathname.replace(".php", "");
            let iframeSrc = "https://restructuredpython.readthedocs.io" + path;
            document.getElementById("docsFrame").src = iframeSrc;
        }
        window.onload = loadDocs;
    </script>
</head>
<body>
    <iframe id="docsFrame" width="100%" height="10000px"></iframe>
</body>
</html>
