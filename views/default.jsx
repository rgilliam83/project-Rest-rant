const React = require('react')


function Def (html) {
    return (
        <html>
            <head>
                <title>RestRant</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def