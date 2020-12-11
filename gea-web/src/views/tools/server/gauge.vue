<template>
    <div ref="main" style="width: 350px; height: 30vh"></div>
</template>

<script>
export default {
    name: 'Gauge',
    props: {
        gaugeData: {
            type: Array,
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
            let myData = this.gaugeData
            let option = {
                // backgroundColor: '#1b1b1b',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                series: [
                    {
                        type: 'gauge',
                        min: 0, //仪表盘起始值
                        max: 100, // 仪表盘最大值
                        splitNumber: 10, // 分割份数
                        radius: '100%', // 缩放大小
                        axisLine: {
                            // 坐标轴线
                            lineStyle: {
                                // 属性lineStyle控制线条样式
                                color: [
                                    [0.09, '#21BA45'],
                                    [0.82, '#1976D2'],
                                    [1, '#C10015'],
                                ],
                                width: 3,
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10,
                            },
                        },
                        axisLabel: {
                            // 坐标轴小刻度文字
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10,
                        },
                        axisTick: {
                            // 坐标轴小刻度样式
                            length: 15, // 属性length控制线长
                            lineStyle: {
                                // 属性lineStyle控制线条样式
                                color: 'auto',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10,
                            },
                        },
                        splitLine: {
                            // 白色的分隔线效果
                            length: 25, // 属性length控制线长
                            lineStyle: {
                                // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 3,
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10,
                            },
                        },
                        pointer: {
                            // 分隔线
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5,
                        },
                        title: {
                            // 中间的文字
                            textStyle: {
                                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                fontSize: 20,
                                fontStyle: 'italic',
                                color: '#fff',
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10,
                            },
                        },
                        detail: {
                            formatter: '{value}%',
                            backgroundColor: 'rgba(30,144,255,0.8)',
                            borderWidth: 1,
                            borderColor: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 5,
                            offsetCenter: [0, '50%'], // x, y，单位px
                            textStyle: {
                                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                                fontWeight: 'bolder',
                                color: '#fff',
                            },
                        },
                        // detail: {
                        //     formatter: '{value}%',
                        //     offsetCenter: [0, '50%'],
                        // },
                        data: myData,
                    },
                ],
            }
            this.myChart.setOption(option)
        },
    },
    watch: {
        gaugeData: {
            handler(newVal, oldVal) {
                this.gaugeData = newVal
                this.drawCharts()
            },
            deep: true,
        },
    },
}
</script>

<style scoped>
</style>