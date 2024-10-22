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
  if (['其它'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => !/香港|镇江|徐州|武汉|济南|台湾|日本|新加坡|狮城|韩国|美国|加拿大|英国|阿根廷/i.test(p.tag))
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
  if (['加拿大'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /加拿大/i.test(p.tag))
      .map(p => p.tag))
  }
   if (['英国'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /英国/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['阿根廷'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /阿根廷/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['江苏'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /徐州|镇江/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['武汉'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /武汉/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['山东'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => /济南/i.test(p.tag))
      .map(p => p.tag))
  }
  if (['全部节点'].includes(i.tag)) {
    i.outbounds.push(...proxies.filter(p => !/block/i.test(p.tag))
      .map(p => p.tag))
  }
})


$content = JSON.stringify(config, null, 2)


function getTags(proxies, regex) {
  return (regex ? proxies.filter(p => regex.test(p.tag)) : proxies).map(p => p.tag)
}