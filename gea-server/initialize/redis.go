package initialize

import (
	"gin-element-admin/global"
	"github.com/go-redis/redis"
	"go.uber.org/zap"
)

func Redis() {
	redisCfg := global.GeaConfig.Redis
	client := redis.NewClient(&redis.Options{
		Addr:     redisCfg.Addr,
		Password: redisCfg.Password, // no password set
		DB:       redisCfg.DB,       // use default DB
	})
	pong, err := client.Ping().Result()
	if err != nil {
		global.GeaLog.Error("redis connect ping failed, err:", zap.Any("err", err))
	} else {
		global.GeaLog.Info("redis connect ping response:", zap.String("pong",pong))
		global.GeaRedis = client
	}
}
