package model

import (
	"gin-element-admin/global"
)

type JwtBlacklist struct {
	global.GeaModel
	Jwt string `gorm:"type:text;comment:jwt"`
}
