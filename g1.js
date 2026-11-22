var sku_rewrite = {
    "g1.ios.30tb.ai.pro.m": "g1.ai.ultra.3months_ip_90p.acq",
    "g1.ios.20tb.ai.pro.m": "g1.20tb.3months_ip_90p.acq"
};

var s = ($response && $response.body) || "";

Object.keys(sku_rewrite).forEach(function(key) {
    s = s.split(key).join(sku_rewrite[key]);
});

$done({
    body: s
});
