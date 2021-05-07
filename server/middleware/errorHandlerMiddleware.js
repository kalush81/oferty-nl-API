module.exports = (email) => (err, req, res, next) => {
    if (err) {
        console.error('CHRIS, INTERNALL ERROR !!!: ', err.stack)
        //@TODO
        // if email set to env notifying about server error
        if (email) {
            //sendMail(err.stack)
        }
        res.status(500).send(err) //server error
    } 
}