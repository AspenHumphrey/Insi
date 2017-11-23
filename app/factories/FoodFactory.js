'use strict';
app.factory("FoodFactory", function($q, $http, FirebaseUrl, FBCreds){
// gets API info
// search food
// carbs
// amount/weight in g


//  authDomain https://api.nutritionix.com/v1_1/search/carrot?results=0:20
// &fields=item_name,brand_name,item_id,nf_total_carbohydrate,nf_serving_size_unit,
// nf_serving_weight_grams&appId=ee37e8c5&appKey=b7d26d4f522f2374e29448491407fd3e


  let getFoodData = (search) => {
      return $q( (resolve, reject) => {
        $http.get(`https://api.nutritionix.com/v1_1/search/${search}?results=0:20&fields=item_name,brand_name,item_id,nf_total_carbohydrate,nf_serving_size_unit&appId=ee37e8c5&appKey=b7d26d4f522f2374e29448491407fd3e`)
        .then( (data) => {
          resolve(data);
        })
        .catch( (err) => {
          reject(err);
        });
      });
    };
	return { 
		getFoodData 
	};

});