class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
    }
    async init() {
        await this.fetchData();
        if (this.chartData) {
            this.createCharts();
        }
    }
    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
        }
    }
}