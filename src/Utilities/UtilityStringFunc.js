import axios from "axios";

export function NumFormatter(num) {
    let si = [
        {value: 1, symbol: ""},
        {value: 1E3, symbol: "k"},
        {value: 1E6, symbol: "M"},
        {value: 1E9, symbol: "G"},
        {value: 1E12, symbol: "T"},
        {value: 1E15, symbol: "P"},
        {value: 1E18, symbol: "E"}
    ];
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(1).replace(rx, "$1") + si[i].symbol;
}


export function getUserTheme(userId) {
    //return axios.get('http://www.mocky.io/v2/5c2b0de83000007000abaf1b')         //main
     return axios.get('http://www.mocky.io/v2/5c2b138f3000001200abaf21')       //red
    // return axios.get('http://www.mocky.io/v2/5c2b14fc3000004c00abaf25')     //nok medadi
      //return axios.get('http://www.mocky.io/v2/5c2b156c3000006900abaf26') //Purple
        .then(response => {
            this.response = response.data
            return this.response
        })

    // return
    // {
    //     fontColor:"#fff",
    //     backgroundColor: "#1e3557"
    // };
}

export function Capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}