module.exports = class GlobalFunctions {
    static getDateTime(){
        let dt = new Date();
        let newdt  = dt.toLocaleString('en-US', { timeZone: 'Asia/Manila', hourCycle: 'h23', year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" });
        let str_date = newdt.split(", ");
        let _d = str_date[0].split("/");
        let _t = str_date[1].split(":");
        let datetime = _d[2]+"-"+_d[0]+"-"+_d[1]+" "+_t[0]+":"+_t[1]+":"+_t[2];
        return datetime;
    }
};
