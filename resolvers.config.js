const course = require('./queries/courses');

module.exports =  {
    course: course.get,
    courses: course.list
};