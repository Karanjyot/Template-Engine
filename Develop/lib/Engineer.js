const Employee = require("./Employee");


class Engineer extends Employee {

    constructor(name,id,email,github){
        super(name, id, email, github);
        this.github  = github;
    }

    getGithub(){
        return this.github
    }
};

module.exports = Engineer;


// const Employee = require("./Employee");
// class Engineer extends Employee {
//   constructor(name, id, email, github) {
//     super(name, id, email, 'Engineer');
//     this.github = github;
//   }
// getGithub() {return `${this.github}`;}
// getRole() {return `${this.title}`;}
// }
// module.exports = Engineer;