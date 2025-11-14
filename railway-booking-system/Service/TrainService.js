class TrainService{
    constructor(trainRepo){
        this.trainRepo = trainRepo;
    }

    search(src, dest){
        return this.trainRepo.getTrains(src, dest);
    }
}

module.exports = TrainService;