class Train{
    #coaches = [];
    constructor(id, name, src, dest){
        this.id = id;
        this.name = name;
        this.src = src;
        this.dest = dest;
    }

    addCoach(coach){
        this.#coaches.push(coach);
    }

    getCoach(){
        return this.#coaches;
    }
}
module.exports = Train;