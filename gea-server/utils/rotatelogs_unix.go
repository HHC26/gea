// +build !windows

package utils

import (
	"gin-element-admin/global"
	zaprotatelogs "github.com/lestrrat-go/file-rotatelogs"
	"go.uber.org/zap/zapcore"
	"os"
	"path"
	"time"
)

//@author: [SliverHorn](https://github.com/SliverHorn)
//@function: GetWriteSyncer
//@description: zap logger中加入file-rotatelogs
//@return: zapcore.WriteSyncer, error

func GetWriteSyncer() (zapcore.WriteSyncer, error) {
	fileWriter, err := zaprotatelogs.New(
		path.Join(global.GeaConfig.Zap.Director, "%Y-%m-%d.log"),
		zaprotatelogs.WithLinkName(global.GeaConfig.Zap.LinkName),
		zaprotatelogs.WithMaxAge(7*24*time.Hour),
		zaprotatelogs.WithRotationTime(24*time.Hour),
	)
	if global.GeaConfig.Zap.LogInConsole {
		return zapcore.NewMultiWriteSyncer(zapcore.AddSync(os.Stdout), zapcore.AddSync(fileWriter)), err
	}
	return zapcore.AddSync(fileWriter), err
}