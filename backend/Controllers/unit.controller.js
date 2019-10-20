const User = require('../Daos/unit.dao');

exports.getUnit = (req, res, next) => {
    const userData = {
        id: req.body.id
    }
    User.findOne({
        id: userData.id
    }, (err, user) => {
        if (err)
            return res.status(500).send('Server error!');
        if (!user) {
            res.send({
                message: 'Something is wrong'
            });
        } else {
            console.log(user);
            
            /*  Problame obtención de datos luego del id, usar user:dataUser
            const dataUser = {
                id: user.id,
                company: user.company,
                mileage_week: user.mileage_week,
                mileage_total: user.mileage_total,
                emissionco2week: user.emissionco2week
            } */
            res.send({
                user
            });
        }
    });
}

exports.getAllUnits = (req, res, next) => {
    User.find({}, (err, user) => {
        if (err)
            return res.status(500).send('Server error!');
        if (!user) {
            res.send({
                message: 'Something is wrong'
            });
        } else {
            res.send({
                user
            });
        }
    });
}