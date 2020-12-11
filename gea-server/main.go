package main

import (
	"gin-element-admin/core"
	"gin-element-admin/global"
	"gin-element-admin/initialize"
)

// @title Gin-Element-Admin API
// @version new
// @description 欢迎使用 Gin-Element-Admin！
// @securityDefinitions.apikey ApiKeyAuth
// @in header
// @name x-token
// @Github https://github.com/Junvary/gea
func main() {
	global.GeaViper = core.Viper()       // 初始化Viper
	global.GeaLog = core.Zap()           // 初始化zap日志库
	global.GeaDb = initialize.Gorm()     // gorm连接数据库
	initialize.MysqlTables(global.GeaDb) // 初始化表
	// 程序结束前关闭数据库链接
	db, _ := global.GeaDb.DB()
	defer db.Close()

	core.RunWindowsServer()
}
