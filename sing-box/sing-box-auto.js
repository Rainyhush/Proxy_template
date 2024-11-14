const { type, name } = $arguments
const compatible_outbound = {
  tag: 'COMPATIBLE',
  type: 'direct',
}
let compatible
let config = JSON.parse($files[0])
let proxies = await produceArtifact({
  name: '中国国际机场',
  type: 'subscription', // /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: 'sing-box',
  produceType: 'internal',
})
config.outbounds.push(...proxies)

config.outbounds.map(i => {
  if (['其它地区'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => !/香港|镇江|徐州|武汉|济南|台湾|日本|新加坡|美国|韩国|英国/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['香港'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /香港/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['台湾'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /台湾/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['日本'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /日本/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['新加坡'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /新加坡/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['韩国'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /韩国/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['美国'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /美国/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['英国'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /英国/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['中国'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /徐州|武汉|镇江|济南/i.test(p.tag))
      .map(p => p.tag))
  }
})


$content = JSON.stringify(config, null, 2)


function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}