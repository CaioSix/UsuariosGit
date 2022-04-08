const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        const { techs } = request.query;

        const techArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techArray,
            },
        });

        console.log(techArray)
        return response.json({devs: []})
    }
}