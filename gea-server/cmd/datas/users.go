package datas

import (
	"gin-element-admin/global"
	"github.com/gookit/color"
	"os"
	"time"

	"gin-element-admin/model"
	uuid "github.com/satori/go.uuid"
	"gorm.io/gorm"
)

var Users = []model.SysUser{
	{GeaModel: global.GeaModel{ID: 1, CreatedAt: time.Now(), UpdatedAt: time.Now()}, UUID: uuid.NewV4(), Username: "admin", Password: "e10adc3949ba59abbe56e057f20f883e", NickName: "超级管理员", HeaderImg: "", AuthorityId: "888"},
	{GeaModel: global.GeaModel{ID: 2, CreatedAt: time.Now(), UpdatedAt: time.Now()}, UUID: uuid.NewV4(), Username: "test", Password: "3ec063004a6f31642261936a379fde3d", NickName: "测试用户", HeaderImg: "http://qmplusimg.henrongyi.top/1572075907logo.png", AuthorityId: "9528"},
}

func InitSysUser(db *gorm.DB) {
	if err := db.Transaction(func(tx *gorm.DB) error {
		if tx.Where("id IN ?", []int{1, 2}).Find(&[]model.SysUser{}).RowsAffected == 2 {
			color.Danger.Println("sys_users表的初始数据已存在!")
			return nil
		}
		if err := tx.Create(&Users).Error; err != nil { // 遇到错误时回滚事务
			return err
		}
		return nil
	}); err != nil {
		color.Warn.Printf("[Mysql]--> sys_users 表的初始数据失败,err: %v\n", err)
		os.Exit(0)
	}
}
