function EmptyCartException(message) {
    const error = new Error(message);

    error.code = "505";
    return error;
}

EmptyCartException.prototype = Object.create(Error.prototype);

function InvalidArticleId(message) {
    const error = new Error(message);

    error.code = "506";
    return error;
}

InvalidArticleId.prototype = Object.create(Error.prototype);

function InvalidArticleQuantity(message) {
    const error = new Error(message);

    error.code = "507";
    return error;
}

InvalidArticleQuantity.prototype = Object.create(Error.prototype);