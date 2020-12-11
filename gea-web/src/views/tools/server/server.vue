<template>
    <div v-loading="loading">
        <div class="serverInfo">
            <span>操作系统：{{server.os.goos}}</span>
            <span>CPU内核：{{server.os.numCpu}}</span>
            <span>编译器：{{server.os.compiler}}</span>
            <span>GoLang版本：{{server.os.goVersion}}</span>
            <span>线程数：{{server.os.numGoroutine}}</span>
        </div>
        <el-row :gutter="15">
            <el-col :span="8">
                <div class="chartBox">
                    <div class="chart">
                        <gauge v-if="server.disk.usedPercent"
                            :gaugeData="[{value: server.disk.usedPercent, name: '硬盘占比'}]" />
                    </div>
                    <div class="chartInfo">
                        <el-row :gutter="10">
                            <el-col :span="12">总量 (MB)：{{server.disk.totalMb}}</el-col>
                            <el-col :span="12">已使用 (MB)：{{server.disk.usedMb}}</el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="12">总量 (GB)：{{server.disk.totalGb}}</el-col>
                            <el-col :span="12">已使用 (GB)：{{server.disk.usedGb}}</el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="chartBox">
                    <bar v-if="server.cpu.name.length !== 0" :barData="server.cpu" />
                    <div class="chartInfo">
                        <el-row :gutter="10">
                            <el-col :span="24">物理核心：{{server.cpu.cores}}</el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="chartBox">
                    <gauge v-if="server.ram.usedPercent" :gaugeData="[{value: server.ram.usedPercent, name: '内存占比'}]" />
                    <div class="chartInfo">
                        <el-row :gutter="10">
                            <el-col :span="12">总量 (MB)：{{server.ram.totalMb}}</el-col>
                            <el-col :span="12">已使用 (MB)：{{server.ram.usedMb}}</el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="12">总量 (GB)：{{(server.ram.totalMb / 1024).toFixed(2)}}</el-col>
                            <el-col :span="12">已使用 (GB)：{{(server.ram.usedMb / 1024).toFixed(2)}}</el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { getSystemState } from '@/api/system.js'
import Gauge from './gauge'
import Bar from './bar'

export default {
    components: {
        Gauge,
        Bar,
    },
    name: 'Server',
    data() {
        return {
            loading: false,
            timer: null,
            server: {
                os: {},
                cpu: { name: [], value: [], cores: '' },
                disk: {},
                ram: {},
            },
            colors: [
                { color: '#5cb87a', percentage: 20 },
                { color: '#e6a23c', percentage: 40 },
                { color: '#f56c6c', percentage: 80 },
            ],
        }
    },
    created() {
        this.loading = true
        this.reload()
        this.timer = setInterval(() => {
            this.reload()
        }, 1000 * 10)
    },
    beforeDestroy() {
        clearInterval(this.timer)
        this.timer = null
    },
    methods: {
        async reload() {
            const { data } = await getSystemState()
            this.server.os = data.server.os
            this.server.disk = data.server.disk
            this.server.ram = data.server.ram
            this.server.cpu.cores = data.server.cpu.cores
            this.server.cpu.value = []
            this.server.cpu.name = []
            for (let i = 0; i < data.server.cpu.cpus.length; i++) {
                this.server.cpu.name.push('核心' + String(i + 1))
                this.server.cpu.value.push(data.server.cpu.cpus[i].toFixed(2))
            }
            this.loading = false
        },
    },
}
</script>

<style lang="scss" scoped>
.serverInfo {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    box-shadow: 0 0 10px 5px black;
    background-color: #57606f;
    color: #ffffff;
    margin-bottom: 40px;
}
.chartBox {
    width: 100%;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px 5px black;
    background-color: #747d8c;
    color: #ffffff;
    .el-row {
        width: 100%;
        text-align: center;
    }
    .chartInfo {
        width: 100%;
        text-align: center;
        font-size: 20px;
        .el-row {
            margin: 5px auto;
        }
    }
}
</style>
