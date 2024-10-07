const { type, name } = $arguments
const compatible_outbound = {
  tag: 'COMPATIBLE',
  type: 'direct',
}
let compatible
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name: 'ZGJ', 
  type: 'subscription', // /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})


config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['Other'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => !/香港|hk|HK|Hong Kong|浙江|宁波|宿迁|广东|镇江|徐州|广州|武汉|襄阳|鞍山|杭州|济南|台湾|tw|TW|TaiWan|日本|jp|JP|Japan|新加坡|狮城|sg|SG|Singapore|韩国|kr|KR|Korea/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['HK and TW'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /香港|台湾|tw|TW|TaiWan|hk|HK|Hong Kong/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['CN'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /浙江|徐州|广州|镇江|鞍山|襄阳|武汉|杭州|济南/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['JP and SG'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /日本|新加坡|狮城|sg|SG|Singapore|jp|JP|Japan/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['KR'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /韩国|kr|KR|Korea/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['Aii node'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => !/block/i.test(p.tag))
      .map(p => p.tag))
  }
})


$content = JSON.stringify(config, null, 2)


function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}