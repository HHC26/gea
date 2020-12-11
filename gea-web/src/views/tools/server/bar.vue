<template>
    <div ref="main" style="width: 100%; height: 30vh;"></div>
</template>

<script>
export default {
    name: 'Bar',
    props: {
        barData: {
            type: Object,
            required: true,
        },
    },
    computed: {
        myChart() {
            return this.$echarts.init(this.$refs.main)
        },
    },
    mounted() {
        this.drawCharts()
    },
    beforeDestroy() {
        this.myChart.clear()
        this.myChart.dispose()
    },
    destroyed() {
        window.onresize = null
    },
    methods: {
        drawCharts() {
            let myData = this.barData
            let option = {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                // backgroundColor: '#1b1b1b',
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    },
                },
                grid: {
                    top: 50,
                    x: 45,
                    x2: 30,
                    y2: 40,
                },
                xAxis: {
                    type: 'category',
                    data: myData.name,
                    axisLine: {
                        lineStyle: {
                            color: 'aliceblue',
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %',
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'aliceblue',
                        },
                    },
                },
                series: [
                    {
                        data: myData.value,
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'inside',
                        },
                        itemStyle: {
                            normal: {
                                color(params) {
                                    var colorList = ['#21BA45', '#1976D2', '#C10015']
                                    if (params.data <= 20) {
                                        return colorList[0]
                                    } else if (params.data > 20 && params.data < 80) {
                                        return colorList[1]
                                    } else {
                                        return colorList[2]
                                    }
                                },
                            },
                        },
                    },
                ],
            }
            this.myChart.setOption(option)
        },
    },
    watch: {
        barData: {
            handler(newVal, oldVal) {
                this.barData = newVal
                this.drawCharts()
            },
            deep: true,
        },
    },
}
</script>

<style scoped>
</style>