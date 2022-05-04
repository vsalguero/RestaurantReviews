let restaurants;

export default class RestaurantsDAO{
    static async injectDB(conn){
        if(restaurants){
            return
        }
        try {
            restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection
        } catch (e) {
            console.error(`Unable to stablish a collection handle in restaurantsDAO ${e}`);
        }
    }

    static async getRestaurants({
        filters = null,
        page = 0,
        restaurantsPerPage = 20,
    }= {}){
        let query;
        if(filters){
            if("name" in filters){
                query = { $test: { $search: filters["name"]}}
            }else if("cuisine" in filters){
                query = { "cuisine": { $search: filters["cuisine"]}}
            }else if("zipcode" in filters){
                query = { "address.zipcode": { $search: filters["zipcode"]}}
            }
        }
    }
}