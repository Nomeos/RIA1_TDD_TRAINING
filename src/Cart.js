/**
 * @file      Cart.js
 * @brief     This class is designed to manage a cart.
 * @author    Created by Nicolas.GLASSEY
 * @version   25-05-2020 - original (dedicated to ProjWebBdd)
 * @version   13-02-2022 - updated (dedicated to RIA1)
 */

let Error =  require('./Error.js');
module.exports = class Cart {

    //region private attributes
    items = null;

    //endregion private attributes

    /**
     * @brief This method constructs a Cart Object
     * @param items : list of cartItems
     */
    constructor(items = null) {
        this.items = items;
    }

    /**
     * @brief This property returns the list of CartItems presents in the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */

    get Items() {
        if (this.items == null) {
            throw new Error.EmptyCartException('Your cart doesn\'t exists !');
        }else{
            if(this.items.empty){
                throw new Error.EmptyCartException('Your cart seems to be empty !');
            }
        }
        return this.items;
    }

    /**
     * @brief This property returns the total of the Cart.
     * @exception EmptyCartException is thrown if the Cart is empty
     */

    get TotalPrice() {
        let total = 0;
        this.Items.forEach(function (item) {
            total += item.Price();
        });
        return total;
    }

    //endregion public methods

    //region private methods
    //endregion private methods
}
