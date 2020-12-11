package datas

import (
	"gin-element-admin/model"
	gormadapter "github.com/casbin/gorm-adapter/v3"
	"github.com/gookit/color"
	"gorm.io/gorm"
	"os"
)

func InitMysqlData(db *gorm.DB) {
	InitSysApi(db)
	InitSysUser(db)
	InitCasbinModel(db)
	InitSysAuthority(db)
	InitSysBaseMenus(db)
	InitAuthorityMenu(db)
	InitSysDictionary(db)
	InitSysAuthorityMenus(db)
	InitSysDataAuthorityId(db)
	InitSysDictionaryDetail(db)
}

func InitMysqlTables(db *gorm.DB) {
	var err error
	if !db.Migrator().HasTable("casbin_rule") {
		err = db.Migrator().CreateTable(&gormadapter.CasbinRule{})
	}
	err = db.AutoMigrate(
		model.SysApi{},
		model.SysUser{},
		model.SysBaseMenu{},
		model.SysAuthority{},
		model.JwtBlacklist{},
		model.SysDictionary{},
		model.SysOperationRecord{},
		model.SysDictionaryDetail{},
		model.SysBaseMenuParameter{},
	)
	if err != nil {
		color.Warn.Printf("[Mysql]-->初始化数据表失败,err: %v\n", err)
		os.Exit(0)
	}
	color.Info.Println("[Mysql]-->初始化数据表成功")
}
