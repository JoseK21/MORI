const User = require('../Daos/emissionfactor.dao');


exports.getEmissionFactor = (req, res, next) => {
    console.log(req.body);
    
    const userData = {
        namefuel: req.body.namefuel,
        factor: req.body.factor
    }
    console.log('getEmissionFactor : '+userData);
    console.log('getEmissionFactor.namefuel : '+userData.namefuel);
    
    User.findOne({
        namefuel: userData.namefuel
    }, (err, user) => {

        if (err)
            return res.status(500).send('Server error!');

        if (!user) {
            // response 
            res.send({
                message: 'Something is wrong'
            });
        } else {
            /* Exito */
            const dataUser = {
                namefuel: user.namefuel,
                factor: user.factor
            }
            res.send({
                /* dataUser */
                user
            });
        }
    });
}

exports.getAllFactors = (req, res, next) => {
    console.log("req : "+req.body);
    
    User.find({}, (err, user) => {

        console.log('>>>>>>>>>>>>>>>\n'+user+'\n');

        if (err)
            return res.status(500).send('Server error!');

        if (!user) {
            // response 
            res.send({
                message: 'Something is wrong'
            });
        } else {
            res.send({ user });
        }
    });
}