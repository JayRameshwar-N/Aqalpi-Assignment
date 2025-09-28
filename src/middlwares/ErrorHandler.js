
module.exports = (err, req, res, next)=>{

    res.status(err.status || 500).json({
        success:false,
        message:err.message || `It's server side err!`
    })
}



