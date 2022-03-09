/**
 * @file      CartItem.js
 * @brief     This class is designed to manage a cart item.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

"use strict";

let Error = require('./Error.js')
module.exports = class CartItem {

    //region private attributes
    #articleId;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    /**
     * @brief This method constructs a CartItem Object
     * @param articleId
     * @param quantity
     * @param price (in CHF)
     * @exception InvalidArticleIdException is thrown when the article is smaller than 1.
     * @exception InvalidQuantityException is thrown when the quantity is smaller than 1.
     * @exception InvalidPriceException is thrown when the price is smaller than 10.
     */
    constructor(articleId, quantity, price) {
        if (articleId < 1) {
            throw new Error.InvalidArticleIdException('Your article id is invalid !');
        }
        if (quantity < 1) {
            throw new Error.InvalidQuantityException('Your article quantity is invalid !');
        }
        if (price < 10) {
            throw new Error.InvalidPriceException('Your article price is invalid !');
        }
        this.#articleId = articleId;
        this.#quantity = quantity;
        this.#price = price;
    }

    /**
     * @brief This property gets the article id
     */
    get ArticleId() {
        return this.#articleId;
    }

    /**
     * @brief This property gets the quantity
     */
    get Quantity() {
        return this.#quantity;
    }

    /**
     * @brief This property sets the quantity
     * @param value, the new quantity to set
     * @exception InvalidQuantityException is thrown when the quantity is smaller than 1.
     */
    set Quantity(value) {
        if (value < 1) {
            throw new Error.InvalidQuantityException('The new quantity of the article is invalid !');
        }
        this.#quantity = value;
    }

    /**
     * @brief This property gets the price
     */
    get Price() {
        return this.#price;
    }

    /**
     * @brief This property gets the price
     * @param value, the new price to set
     * @exception InvalidPriceException is thrown when the price is smaller than 10.
     */
    set Price(value) {
        if (value < 10) {
            throw new Error.InvalidPriceException('The new price of the article is invalid !');
        }
        this.#price = value;
    }

    /**
     * @brief This property gets the total
     */
    get Total() {
        return this.#quantity * this.#price;
    }

    //endregion public methods

    //region private methods
    //endregion private methods
}






