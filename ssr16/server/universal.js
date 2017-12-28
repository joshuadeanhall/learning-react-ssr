const path = require('path');
const fs = require('fs');
require('isomorphic-fetch');

const React = require('react');
const {renderToString} = require('react-dom/server');
const {StaticRouter} = require('react-router-dom');

//const {default: App} = require('../src/containers/App');
const {default: App} = require('../src/PredictionApp');

module.exports = function universalLoader(req, res) {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData)=>{
        if (err) {
            console.error('read err', err);
            return res.status(404).end()
        }



        fetch('https://api.coindesk.com/v1/bpi/historical/close.json')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then((data) => {
                let historicalDataKeys = Object.keys(data.bpi);
                let historicalData = historicalDataKeys.map((key) => ({
                    'date': key,
                    'value': data.bpi[key]
                }));



                const context = {};
                const markup = renderToString(
                    <App showExtra={false} historicalData={historicalData}>
                    </App>
                );

                if (context.url) {
                    // Somewhere a `<Redirect>` was rendered
                    res.redirect(301, context.url)
                } else {
                    // we're good, send the response
                    const RenderedApp = htmlData.replace('{{SSR}}', markup)
                    res.send(RenderedApp)
                }





                console.log(historicalData);
            });



    })
}