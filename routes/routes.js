const router = app => {
    app.get('/', (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send({ message: 'Node.js and Express REST API!'});
    });    
};

module.exports = router;
