
/**
 * @fileoverview Template to compose HTTP reqeuest.
 *
 */
let userInfo = null;
let Task = step();
Task.next();

function* step() {
  userInfo = yield user_info();
  console.log('用户信息', userInfo);
  console.log('用户信息', JSON.stringify(userInfo));
}
function user_info() {
  const data = 'reqData=%7B%22sharePin%22%3A%22%22%2C%22shareType%22%3A1%2C%22channelLV%22%3A%22%22%2C%22source%22%3A0%2C%22riskDeviceParam%22%3A%22%7B%5C%22eid%5C%22%3A%5C%22SCTUHAO57J4VK5VZZK347KLZKWSJJVQY3B4SHL24I7XNJDOYEW6XX2GBIKS3F3SPESTOACPMRTAVBQZVERPVWLSMVE%5C%22%2C%5C%22dt%5C%22%3A%5C%22iPhone11%2C8%5C%22%2C%5C%22ma%5C%22%3A%5C%22%5C%22%2C%5C%22im%5C%22%3A%5C%22%5C%22%2C%5C%22os%5C%22%3A%5C%22iOS%5C%22%2C%5C%22osv%5C%22%3A%5C%2213.4.1%5C%22%2C%5C%22ip%5C%22%3A%5C%22112.96.195.152%5C%22%2C%5C%22apid%5C%22%3A%5C%22jdapp%5C%22%2C%5C%22ia%5C%22%3A%5C%22F75E8AED-CB48-4EAC-A213-E8CE4018F214%5C%22%2C%5C%22uu%5C%22%3A%5C%22%5C%22%2C%5C%22cv%5C%22%3A%5C%229.0.0%5C%22%2C%5C%22nt%5C%22%3A%5C%224G%5C%22%2C%5C%22at%5C%22%3A%5C%221%5C%22%2C%5C%22fp%5C%22%3A%5C%226ac83e85e8bad60325c9256c79d9dc0e%5C%22%2C%5C%22token%5C%22%3A%5C%22WP3SV4JYWPIYTZXFLXOZ3GDOWIDJAIRIJUOMFBUCDYHBEJNVTKBHASOUPH3CIVUUZFONQB2T57XU2%5C%22%7D%22%7D'
  request();
}
function request() {
  const url = `https://ms.jr.jd.com/gw/generic/uc/h5/m/login?_=1593180766566`;
  const method = `POST`;
  const headers = {
    'Accept' : `application/json`,
    'Origin' : `https://uua.jr.jd.com`,
    'Accept-Encoding' : `gzip, deflate, br`,
    'Cookie' : `3AB9D23F7A4B3C9B=SCTUHAO57J4VK5VZZK347KLZKWSJJVQY3B4SHL24I7XNJDOYEW6XX2GBIKS3F3SPESTOACPMRTAVBQZVERPVWLSMVE; unpl=V2_ZzNtbUMDShJ2AE5Sc0sPAWIEFw8SVBFHdAtOA39LWgNkUEVVclRCFnQUR1NnGlwUZwYZX0dcQRFFOEVWfBtaAWIAFW0IRDdALU0YF2gSTxYrM3xdclRDJXQ4RlBzGloGZwAUXkdUQhZ1DUBRchtbNVcDGlpyV0IUdAlHUH4YXgFiM04fEBYBJXELQ1V5EV0NbjMTbUJURBF3DEZVcxFsUwkDE1xDVkodcg1GGXsdVAZhABJeRFRGFnQLRlF9HFUHYDMTbUE%253d%7CADC_01kVmbSKYcvw0FG6TbRPNd8errkgxJUPRjwfStnEHX6ssG3rVe8xAELMO8K6PTMskObILSLmB22m8ecQ%2Br7B7sPNxw2WZ2Qcl42RkTlWHx9eCD%2FJNUSxp35qAXfoN86GPA8FZd7fps9RifWQIzZ0d1S8aBjtcChgXvefrsfBwkTCWBAsFSuhAlAhjcpVPIYcoPZbOy6bqLQfwRUwioKKiICODIMem3UZW%2BqyLNE8wr8biQM4q6Jo8A2QhGsu1faDk5Rt8GXyVIDXNZqW9zba8deWM7SSvxWjNL0prO2BV4%2BnFLvOzllMBZ6DSGf%2BgsZRrz15PuqHvI9Ck9lz%2BehrFvqGDiBefa1xUKOJstsHUy6NoKpJVtALKxYzMsDJvKVlrCCAAaRZOXm0iupPbBdVyxgjTaIcd5aq2mJvLT63Zv5OFd%2B0xRjN6FArcGfJeUnvrOnqepl%2FZwOTnqq%2BDWUjZtHhGZRT3JwDr0t3otOIn6RSd48Qy89cdeW8aVJ1n0c89pFzkgPIcw5pyRsYH1Tlnm6yzwmUHzrqcXOa3tNJzTqeP51udUGnQdmg59z9EjAdsorL4mIJD1%2F6FKOS%2FLpZE5GyR1eQ5cFEQ4NjDUf%2FQJG7dNmFE2KVqRAXSSRZqKh6uFU7WKlv65%2FMSgfitvp%2FAQ%3D%3D; __jda=168871293.1542384114560261612878.1542384114.1593176328.1593180076.825; __jdb=168871293.3.1542384114560261612878|825.1593180076; __jdc=168871293; __jdv=168871293%7Ckong%7Ct_1000170135%7Ctuiguang%7Cnotset%7C1593059927172; mba_muid=1542384114560261612878.1287.1593180765780; mba_sid=1287.20; pre_seq=1; pre_session=e35caf0a69be42084e3c97eef56c3af7b0262d01|3485; qd_ad=-%7C-%7Cdirect%7C-%7C0; qd_fs=1593180074613; qd_ls=1593180074613; qd_sid=KBWAA54L-3Z392RS6DZWVETNGE5ZV-1; qd_sq=1; qd_ts=1593180074613; qd_uid=KBWAA54L-3Z392RS6DZWVETNGE5ZV; pt_key=app_openAAJeyxCiAECwCwAQ1QHw3Ge0KNrylmtwls0o98ygg2Xn2aHb4RgZtn4t0POnMdQhWJFgGj3If6Wrfwp_sNk_DPTOYl7eukdO; pt_pin=%E8%A2%AB%E6%8A%98%E5%8F%A0%E7%9A%84%E8%AE%B0%E5%BF%8633; pwdt_id=%E8%A2%AB%E6%8A%98%E5%8F%A0%E7%9A%84%E8%AE%B0%E5%BF%8633; sid=2d98e88cf7d182f60d533476c2ce777w; __jd_ref_cls=Mnpm_ComponentApplied; BATQW722QTLYVCRD={"tk":"jdd01BJKTV3JDUFQBRFFKUBDVFUXEVJPF34DQK7JFNDOWHPOJT2LFXWASDEVX4Z62G5UYI4DORCBC6XO5QE3VNZCWTPAK5AREA4NM2SBKTMA01234567","t":1593180074393}; shshshfp=557af30ab96fb4e7eeecfe27a067daad; shshshfpb=0acbc8adf125f38e03de27ee5e46c4bbba83663852992a41f5bf42f507; PPRD_P=CT.138985.2.2-UUID.1542384114560261612878; __wga=1593131708964.1593131708964.1593090187327.1593090187327.1.2; cid=8; retina=1; wxa_level=1; sc_width=414; webp=0; shshshfpa=c4af958f-efbb-5860-59fc-2eb510948745-1542729552; wq_addr=137603224%7C19_1601_3633_0%7C%u5E7F%u4E1C_%u5E7F%u5DDE%u5E02_%u5929%u6CB3%u533A_%7C%u5E7F%u4E1C%u5E7F%u5DDE%u5E02%u5929%u6CB3%u533A%u5E7F%u5DDE%u5927%u9053%u5317885%u53F7%u6210%u9F99%u4E2D%u5B66%u5761%u4E0B%7C113.317%2C23.1697; __jrr=7A5437CE270EF5079AE7EA3CB95F34; visitkey=57961280991944449`,
    'Content-Type' : `application/x-www-form-urlencoded;charset=UTF-8`,
    'Host' : `ms.jr.jd.com`,
    'Connection' : `keep-alive`,
    'User-Agent' : `jdapp;iPhone;9.0.0;13.4.1;e35caf0a69be42084e3c97eef56c3af7b0262d01;network/4g;ADID/F75E8AED-CB48-4EAC-A213-E8CE4018F214;supportApplePay/3;hasUPPay/0;pushNoticeIsOpen/1;model/iPhone11,8;addressid/2005183373;hasOCPay/0;appBuild/167237;supportBestPay/0;jdSupportDarkMode/0;pv/1287.19;apprpd/MyJD_GameMain;ref/https%3A%2F%2Fuua.jr.jd.com%2Fuc-fe-wxgrowing%2Fmoneytree%2Findex%2F%3Fchannel%3Dyxhd%26lng%3D113.325843%26lat%3D23.204628%26sid%3D2d98e88cf7d182f60d533476c2ce777w%26un_area%3D19_1601_50258_51885;psq/1;ads/;psn/e35caf0a69be42084e3c97eef56c3af7b0262d01|3485;jdv/0|kong|t_1000170135|tuiguang|notset|1593059927172|1593059927;adk/;app_device/IOS;pap/JA2015_311210|9.0.0|IOS 13.4.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`,
    'Referer' : `https://uua.jr.jd.com/uc-fe-wxgrowing/moneytree/index/?channel=yxhd&lng=113.325896&lat=23.204600&sid=2d98e88cf7d182f60d533476c2ce777w&un_area=19_1601_50258_51885`,
    'Accept-Language' : `zh-cn`
  };
  const body = `reqData=%7B%22sharePin%22%3A%22%22%2C%22shareType%22%3A1%2C%22channelLV%22%3A%22%22%2C%22source%22%3A0%2C%22riskDeviceParam%22%3A%22%7B%5C%22eid%5C%22%3A%5C%22SCTUHAO57J4VK5VZZK347KLZKWSJJVQY3B4SHL24I7XNJDOYEW6XX2GBIKS3F3SPESTOACPMRTAVBQZVERPVWLSMVE%5C%22%2C%5C%22dt%5C%22%3A%5C%22iPhone11%2C8%5C%22%2C%5C%22ma%5C%22%3A%5C%22%5C%22%2C%5C%22im%5C%22%3A%5C%22%5C%22%2C%5C%22os%5C%22%3A%5C%22iOS%5C%22%2C%5C%22osv%5C%22%3A%5C%2213.4.1%5C%22%2C%5C%22ip%5C%22%3A%5C%22112.96.195.152%5C%22%2C%5C%22apid%5C%22%3A%5C%22jdapp%5C%22%2C%5C%22ia%5C%22%3A%5C%22F75E8AED-CB48-4EAC-A213-E8CE4018F214%5C%22%2C%5C%22uu%5C%22%3A%5C%22%5C%22%2C%5C%22cv%5C%22%3A%5C%229.0.0%5C%22%2C%5C%22nt%5C%22%3A%5C%224G%5C%22%2C%5C%22at%5C%22%3A%5C%221%5C%22%2C%5C%22fp%5C%22%3A%5C%226ac83e85e8bad60325c9256c79d9dc0e%5C%22%2C%5C%22token%5C%22%3A%5C%22WP3SV4JYWPIYTZXFLXOZ3GDOWIDJAIRIJUOMFBUCDYHBEJNVTKBHASOUPH3CIVUUZFONQB2T57XU2%5C%22%7D%22%7D`;

  const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
  };
  // $task.fetch(myRequest).then(response => {
  //   console.log(response.statusCode + "\n\n" + response.body);
  //   sleep(JSON.parse(response.body));
  // }, reason => {
  //   console.log(reason.error);
  // });
  $task.fetch(myRequest).then(
      (response) => {
        // $.log(response.body)
        return JSON.parse(response.body)
      },
      (reason) => console.log(reason.error, reason)//callback(reason.error, reason, reason)
  ).then((response) => sleep(response))
}

function sleep(response) {
  console.log('休息一下');
  setTimeout(() => {
    $hammer.log('休息结束');
    //$hammer.log(response)
    Task.next(response)
  }, 2000);
}
