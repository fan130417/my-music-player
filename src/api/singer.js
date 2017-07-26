/**
 * Created by FanJunjie on 2017/7/18.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    g_tk: 1664029744
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    songstatus: 1,
    begin: 0,
    order: 'listen',
    num: 30,
    needNewCode: 0,
    singermid: singerId,
    hostUin: 0
  })

  return jsonp(url, data, options)
}
