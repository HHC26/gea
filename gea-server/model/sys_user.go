package model

import (
	"gin-element-admin/global"
	"github.com/satori/go.uuid"
)

type SysUser struct {
	global.GeaModel
	UUID        uuid.UUID    `json:"uuid" gorm:"comment:用户UUID"`
	Username    string       `json:"userName" gorm:"comment:用户登录名"`
	Password    string       `json:"-"  gorm:"comment:用户登录密码"`
	NickName    string       `json:"nickName" gorm:"comment:用户昵称" `
	HeaderImg   string       `json:"headerImg" gorm:"comment:用户头像"`
	Authority   SysAuthority `json:"authority" gorm:"foreignKey:AuthorityId;references:AuthorityId;comment:用户角色"`
	AuthorityId string       `json:"authorityId" gorm:"default:888;comment:用户角色ID"`
}
