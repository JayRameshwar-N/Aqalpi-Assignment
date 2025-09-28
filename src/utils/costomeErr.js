

class CostomErr {
    constructor(message,status){
        super(message),
        status = status || 500
    }
}


module.exports = CostomErr;