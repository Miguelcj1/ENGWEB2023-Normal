const Plantas = require('../models/Plantas')

module.exports.list = () => {
    return Plantas.find()
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}

module.exports.getPlanta = (id) => {
    return Plantas.findOne({_id: id})
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}

module.exports.addPlanta = (planta) => {
    return Plantas.collection.insertOne(planta)
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}

module.exports.deletePlanta = (id) => {
    return Plantas.deleteOne({_id: id})
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}


module.exports.getEspecie = (especie) => {
    return Plantas.find({"Espécie": especie})
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}

module.exports.getImplant = (implant) => {
    return Plantas.find({"Implantação": implant})
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}

module.exports.freguesias = () => {
    return Plantas.distinct("Freguesia").sort()
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}

module.exports.especies = () => {
    return Plantas.distinct("Espécie").sort()
            .then((result) => {
                return result
            }).catch((err) => {
                throw err
            });
}
