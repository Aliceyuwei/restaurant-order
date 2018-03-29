var farm = {
    farmer: '卡斯柏',
    chick: 15,
    duck:3,
    dog:['張姆士','龐的'],
    goDinner: function(){
        console.log(farm.farmer+",你該回家吃飯了吧!");
    },
    poultryTotal:function(){
        var sum = farm.chick + farm.duck;
        console.log("我這裡總共有"+sum+"隻家禽");
    }
};
farm.goDinner();
farm.poultryTotal();