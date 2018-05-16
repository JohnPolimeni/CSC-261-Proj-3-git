db.items.find({}, {Currently: 1}).sort({Currently:-1}).limit(1).pretty();
