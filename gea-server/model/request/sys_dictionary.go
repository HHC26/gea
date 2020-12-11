package request

import "gin-element-admin/model"

type SysDictionarySearch struct{
    model.SysDictionary
    PageInfo
}