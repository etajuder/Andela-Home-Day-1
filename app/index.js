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
    }
}