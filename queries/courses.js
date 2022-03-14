const bd = require('../bd');

module.exports = {
    get: (args) => {
        console.log(args);
        const id = args.id;
        return bd.filter(course => {
            return course.id == id;
        })[0];
    },

    list: (req, res) => {
        return db;
    }
}