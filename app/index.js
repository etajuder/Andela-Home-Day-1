module.exports = {
    dataTypes:function (data){
        if(data === null || typeof data === 'undefined'){
            return 'no value';
        }else if(typeof data === 'boolean'){
            return data;
        }else if(typeof data === 'number'){
            if(data < 100){
                return 'less than 100';
            }else{
                return data === 100? 'equal to 100' : 'more than 100';
            }
        }else if(typeof data === "string"){
            return data.length;
        }else if(typeof data === "object" && Array.isArray(data)){
            return data.length >= 3 ? data[2] : undefined;
        }else if(typeof data === "function"){
            return data(true);
        }
    },
    getPrimes:function(num){
        if(typeof num !== 'number'){
            return 'invalid input';
        }else if(num === 0){
            return 'zero supplied as input';
        }else if(num === 1){
        return 'not prime';
        }else if(num < 0){
            return 'negative value supplied';
        }else{
            var prime = [];
            for(var i = 2; i<= num; i++){
                
           is_prime = !(Array(i + 1).join(1).match(/^1?$|^(11+?)\1+$/));
               if(is_prime){
                  prime.push(i); 
               };
            }
            return prime;
        }
    }
}