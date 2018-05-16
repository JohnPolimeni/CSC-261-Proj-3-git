db.items.aggregate([{$match: {"Seller._Rating": {$gt: 1000}}},{$project: {_id:0, Seller:1}},{$sort: {"Seller._Rating":1, "Seller._id":1}}])
