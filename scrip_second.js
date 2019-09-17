db.Prod_list.find(
  {"price": 
    {$lt: 800}
  }
).pretty()



db.Prod_list.find(
  {"prod_cat": DBRef("Prod_cats", "2")}).pretty()



db.Prod_cats.find({}, {"name_cat": 1})



db.Prod_list.aggregate(
  {$group: 
    {_id: "$prod_cat", minPrice:
      {$min: "$price"}
    }
  },
  {$sort: 
    {minPrice: 1}
  },
  {$limit: 1})


db.Prod_list.aggregate(
  {$match:
    {"wholesale_price":
      {$lt: 1300}
    }
  },
  {$match:
    {"wholesale_price":
      {$gt: 850}
    }
  }).
pretty()