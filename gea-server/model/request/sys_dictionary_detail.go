package request

import "gin-element-admin/model"

type SysDictionaryDetailSearch struct{
    model.SysDictionaryDetail
    PageInfo
}