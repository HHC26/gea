package core

import (
	"fmt"
	"gin-element-admin/global"
	"gin-element-admin/initialize"
	"go.uber.org/zap"
	"time"
)

type server interface {
	ListenAndServe() error
}

func RunWindowsServer() {
	if global.GeaConfig.System.UseMultipoint {
		// 初始化redis服务
		initialize.Redis()
	}
	Router := initialize.Routers()
	Router.Static("/form-generator", "./resource/page")

	address := fmt.Sprintf(":%d", global.GeaConfig.System.Addr)
	s := initServer(address, Router)
	// 保证文本顺序输出
	// In order to ensure that the text order output can be deleted
	time.Sleep(10 * time.Microsecond)
	global.GeaLog.Info("server run success on ", zap.String("address", address))

	fmt.Println("  _______  __  .__   __.         _______  __       _______ .___  ___.  _______ .__   __. .___________.         ___       _______  .___  ___.  __  .__   __. \n /  _____||  | |  \\ |  |        |   ____||  |     |   ____||   \\/   | |   ____||  \\ |  | |           |        /   \\     |       \\ |   \\/   | |  | |  \\ |  | \n|  |  __  |  | |   \\|  |  ______|  |__   |  |     |  |__   |  \\  /  | |  |__   |   \\|  | `---|  |----`______ /  ^  \\    |  .--.  ||  \\  /  | |  | |   \\|  | \n|  | |_ | |  | |  . `  | |______|   __|  |  |     |   __|  |  |\\/|  | |   __|  |  . `  |     |  |    |______/  /_\\  \\   |  |  |  ||  |\\/|  | |  | |  . `  | \n|  |__| | |  | |  |\\   |        |  |____ |  `----.|  |____ |  |  |  | |  |____ |  |\\   |     |  |          /  _____  \\  |  '--'  ||  |  |  | |  | |  |\\   | \n \\______| |__| |__| \\__|        |_______||_______||_______||__|  |__| |_______||__| \\__|     |__|         /__/     \\__\\ |_______/ |__|  |__| |__| |__| \\__| \n                                                                                                                                                            ")
	fmt.Println("欢迎使用 Gin-Element-Admin ！")
	global.GeaLog.Error(s.ListenAndServe().Error())
}
