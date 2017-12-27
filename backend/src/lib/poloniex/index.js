const currencyPairMap = require('./currencyPairMap');
const axios = require('axios');

module.exports = (function () {
    return {

        getCurrenyPairName(id){
            return currencyPairMap[id.toString()];
        },
        getTickers(){
            return axios.get('https://poloniex.com/public?command=returnTicker').then(
                res => res.data
            )
        },
        convertToTickerObject(data){
            const keys = [
                'id',
                'last',
                'lowestAsk',
                'highestBid',
                'percentChange',
                'baseVolume',
                'quoteVolume',
                'isFrozen',
                'high24hr',
                'low24hr'
            ];
            const object = {};
            data.forEach((value, i) => {
                //sets the name value
                if(i === 0){
                    object.name = this.getCurrenyPairName(value);
                    return;
                }

                const key = keys[i];
                object[key] = value;
            });

            return object
        }
    }
})();