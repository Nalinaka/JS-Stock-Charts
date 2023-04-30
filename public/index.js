async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

async function main()



const { GME, MSFT, DIS, BNTX } = mockData;

const stocks = [GME, MSFT, DIS, BNTX];

class to{constructor(t,e) {const
    n = this; this.config=e=new jn(e); const
    o=Zn(t), s=Jn(0); if(s) 
    console.log(Chart)
}
}



new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
        }]
    }
});

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:  'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
        }]
    }
});
console.log(stocks[0].values)                                                  

stocks[0].values.map( value => value.datetime)

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:  'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)'
        }]
    }
});

new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map( stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(value => parseFloat(value.high)),
            backgroundColor: getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        }))
    }

        stocks.forEach( stock => stock.values.reverse())

        // Time Chart
        new Chart(timeChartCanvas.getContext('2d'), {
            type: 'line',
            data: {
                labels: stocks[0].values.reverse().map(value => value.datetime),
                datasets: stocks.map(stock => ({
                    label: stock.meta.symbol,
                    data: stock.values.reverse().map(value => parseFloat(value.high))
                    backgroundColor: getColor(stock.meta.symbol),
                    borderColor: getColor(stock.meta.symbol),
                }))
            }
        });
        

        function getColor(stock) {
            if(stock === "GME"){
                return 'rgba(61, 161, 61, 0.7)'
            }
            if(stock === "MSFT"){
                return 'rgba(209, 4, 25, 0.7)'
            }
            if(stock === "DIS"){
                return 'rgba(18, 4, 209, 0.7)'
            }
            if(stock === "BNTX"){
                return 'rgba(166, 43, 158, 0.7)'
            }}





b7bd6495b01c4bcab6a3533baec80bf4


//let GME = result.GME
//let MSFT = result.MSFT
//let DIS = result.DIS
//let BTNX = result.BTNX

// const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array

