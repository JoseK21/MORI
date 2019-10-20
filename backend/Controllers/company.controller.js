const User = require('../Daos/company.dao');


exports.getCompany = (req, res, next) => {
    console.log(req.body);
    
    const userData = {
        name: req.body.name,
        mileage: req.body.mileage,
        emission_week: req.body.emission_week,
        emission_total: req.body.emission_total
    }
    console.log(userData);
    
    User.findOne({
        name: userData.name
    }, (err, user) => {

        console.log(user);

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
                name: user.name,
                mileage: user.mileage,
                emission_week: user.emission_week,
                emission_total: user.emission_total
            }
            res.send({
                dataUser
            });
        }
    });
}

exports.getAllCompany = (req, res, next) => {
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