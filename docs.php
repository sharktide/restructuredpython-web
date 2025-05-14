<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RestructuredPython Docs</title>
    <script>
        function loadDocs() {
            let path = window.location.pathname.replace("/docs", ""); // Extract path after /docs
            let iframeSrc = "https://restructuredpython.readthedocs.io" + path;
            document.getElementById("docsFrame").src = iframeSrc;
        }
        window.onload = loadDocs;
    </script>
</head>
<body>
    <iframe id="docsFrame" width="100%" height="1000px"></iframe>
</body>
</html>
