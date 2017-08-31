/**
 * Created by FanJunjie on 2017/8/30.
 */
import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'

export function getTopList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  
  const data = Object.assign({}, commonParams, {
    platform: 'H5',
    needNewCode: 1
  })
  
  return jsonp(url, data, options)
}

export function getMusicList (topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
  
  const data = Object.assign({}, commonParams, {
    page: 'detail',
    type: 'top',
    tpl: 3,
    platform: 'H5',
    needNewCode: 1,
    topid
  })
  
  return jsonp(url, data, options)
}
