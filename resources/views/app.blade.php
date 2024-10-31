<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>App</title>
    @viteReactRefresh
    @vite('/resources/js/App.jsx')
</head>
<body>
<div id="app" data-page="{{ json_encode($page, JSON_THROW_ON_ERROR) }}"></div>

<!-- Scripts -->
@vite('resources/js/App.jsx')
</body>
</html>
