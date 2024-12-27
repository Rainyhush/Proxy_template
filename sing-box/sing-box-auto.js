const { type, name } = $arguments;
const compatible_outbound = {
  tag: "COMPATIBLE",
  type: "direct",
};
let compatible;
let config = JSON.parse($files[0]);
let proxies = await produceArtifact({
  name: "RHKTMS",
  type: "subscription", // /^1$|col/i.test(type) ? 'collection' : 'subscription',
  platform: "sing-box",
  produceType: "internal",
});
config.outbounds.push(...proxies);

config.outbounds.map((i) => {
  if (["Other"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies
        .filter(
          (p) =>
            !/镇江|徐州|武汉|济南|香港|direct|HongKong|HK|台湾|Taiwan|TW|日本|Japan|JP|新加坡|Singapore|SG|美国|America|US|韩国|Korea|KR|英国|United Kingdom|UK/i.test(
              p.tag,
            ),
        )
        .map((p) => p.tag),
    );
  }
  if (["HongKong"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies
        .filter((p) => /香港|HongKong|HK/i.test(p.tag))
        .map((p) => p.tag),
    );
  }
  if (["Taiwan"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies.filter((p) => /台湾|Taiwan|TW/i.test(p.tag)).map((p) => p.tag),
    );
  }
  if (["Japan"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies.filter((p) => /日本|Japan|JP/i.test(p.tag)).map((p) => p.tag),
    );
  }
  if (["Singapore"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies
        .filter((p) => /新加坡|Singapore|SG/i.test(p.tag))
        .map((p) => p.tag),
    );
  }
  if (["Korea"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies.filter((p) => /韩国|Korea|KR/i.test(p.tag)).map((p) => p.tag),
    );
  }
  if (["America"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies
        .filter((p) => /美国|America|US/i.test(p.tag))
        .map((p) => p.tag),
    );
  }
  if (["UnitedKingdom"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies
        .filter((p) => /英国|UnitedKingdom|United Kingdom|UK/i.test(p.tag))
        .map((p) => p.tag),
    );
  }
  if (["ChinaR"].includes(i.tag)) {
    i.outbounds.push(
      ...proxies
        .filter((p) => /徐州|武汉|镇江|济南/i.test(p.tag))
        .map((p) => p.tag),
    );
  }
});

$content = JSON.stringify(config, null, 2);

function getTags(proxies, regex) {
  return (regex ? proxies.filter((p) => regex.test(p.tag)) : proxies).map(
    (p) => p.tag,
  );
}
