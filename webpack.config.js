const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: { //Decimos a donde queremos empujar nuestro proyecto
        path: path.resolve(__dirname, 'dist'), // Añadimos un path para establecer donde voya a empujar o guardar este elemento.
        // __dirname => Es el directorio donde se encuentra mi proyecto // 'dist' => carpeta creada donde se va ha guardar nuestro proyecto.
        filename: 'bundle.js' // Necesitamos llamar a mi compilado o a mi bundle de javascript una asignación y un nombre.
    },
    resolve: { // Añadimos una configuración que nos va permitir saber con que archivos vamos a trabajar.
        extensions: ['.js','.jsx'] //Le pasamos las extensiones con las que estamos trabajando.
    },
    module: { // Creamos un módulo donde vamos a tener las reglas de nuestro proyecto.
        rules: [ 
            {
                test: /\.(js|jsx)$/, //($/ => Se cierra con esta expresión regular) Regla para identificar estos archivos 'js', 'jsx'.
                exclude: /node_modules/, //excluimos la carpeta node_modules, por que si lo dejamos, va ha encontrar archivos js y jsx dentro de node_modules
                //y nos va a crear algo realmente muy feo (autodestrucción xd)
                use: { // utilizamos el loader que instalamos al inicio - babel-loader.
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/, // 2da regla que nos va a permitir identificar los archivos html de nuestro proyecto, entenderlos y prepararlos
                use: [{ // utilizamos el loader que instalamos al inicio - html-loader.
                    loader: "html-loader"
                }]
            } 
        ]
    },
    plugins: [ // Añadimos el plugin que instalamos para poder entender nuestro archivo index.html que creamos en la carpeta public y el archivo index que se va ha generar
        // en la carpeta 'dist' que se va a enviar a producción.
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            file: "./index.html"
        })
    ]

}