class TrainRepository{

    constructor(){
        this.trains = [];
    }

    addTrain(train){
        this.trains.push(train);
    }

    getTrains(src, dest){
        return this.trains.filter(t=> t.src === src && t.dest === dest);
    }

    getTrainById(trainId){
        return this.trains.find(t => t.id === trainId);
    }
}
module.exports = TrainRepository;