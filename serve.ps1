$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add('http://localhost:8000/')
$listener.Start()
Write-Host 'Serving at http://localhost:8000/'
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = $context.Request.Url.LocalPath.TrimStart('/')
    if ($path -eq '') { $path = 'index.html' }
    $file = Join-Path $PWD $path
    if (Test-Path $file) {
        $ext = [System.IO.Path]::GetExtension($file).ToLower()
        switch ($ext) {
            '.html' { $context.Response.ContentType = 'text/html' }
            '.htm' { $context.Response.ContentType = 'text/html' }
            '.css' { $context.Response.ContentType = 'text/css' }
            '.js' { $context.Response.ContentType = 'application/javascript' }
            '.png' { $context.Response.ContentType = 'image/png' }
            '.jpg' { $context.Response.ContentType = 'image/jpeg' }
            '.jpeg' { $context.Response.ContentType = 'image/jpeg' }
            '.gif' { $context.Response.ContentType = 'image/gif' }
            '.svg' { $context.Response.ContentType = 'image/svg+xml' }
            '.ico' { $context.Response.ContentType = 'image/x-icon' }
            '.json' { $context.Response.ContentType = 'application/json' }
            '.woff' { $context.Response.ContentType = 'font/woff' }
            '.woff2' { $context.Response.ContentType = 'font/woff2' }
            '.ttf' { $context.Response.ContentType = 'font/ttf' }
            '.eot' { $context.Response.ContentType = 'application/vnd.ms-fontobject' }
            default { $context.Response.ContentType = 'application/octet-stream' }
        }
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    else {
        $context.Response.StatusCode = 404
    }
    $context.Response.Close()
} 