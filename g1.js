var s = ($response && $response.body) || "";
$done({
  body: s.split("30tb.ai.pro.m").join("30tb.m")
         .split("20tb.m.v2").join("20tb.m")
});
