var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartsSchema = new Schema({
    name: {
        unique: true,
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    userId: {
        type: String,
        ref: "user"
    },
    orderId: {
        type: String,
        ref: "user"
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    order: {
        type: Schema.Types.ObjectId,
        ref: "order"
    }
}, {
    timestamps: true
});

var carts = mongoose.model("carts", cartsSchema);

module.exports = carts;