package router

import (
	"gin-element-admin/api/v1"
	"gin-element-admin/middleware"
	"github.com/gin-gonic/gin"
)

func InitSystemRouter(Router *gin.RouterGroup) {
	SystemRouter := Router.Group("system").Use(middleware.OperationRecord())
	{
		SystemRouter.POST("getSystemConfig", v1.GetSystemConfig) // 获取配置文件内容
		SystemRouter.POST("setSystemConfig", v1.SetSystemConfig) // 设置配置文件内容
		SystemRouter.POST("getServerInfo", v1.GetServerInfo)     // 获取服务器信息
	}
}
