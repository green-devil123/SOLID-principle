export class MenuRepository{
    constructor(sequelize){
        this.models = sequelize.models;
    }

    async getMenuByRestaurants(restaurantId){
        return await this.models.MenuItem.findAll({where: restaurantId});
    }

    async getItemById(id){
        return await this.models.MenuItem.findByPK(id);
    }
}