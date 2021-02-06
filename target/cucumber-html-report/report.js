$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LonginOrange.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Login sistema OrangeHRM",
  "description": "Eu como usuário\r\nQuero reralizar login no sistema",
  "id": "login-sistema-orangehrm",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2281185099,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "acessar o sistema",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que acesso a URL \"https://opensource-demo.orangehrmlive.com/index.php/auth/login\"",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {
      "val": "https://opensource-demo.orangehrmlive.com/index.php/auth/login",
      "offset": 18
    }
  ],
  "location": "LonginOrangeSteps.que_acesso_a_URL(String)"
});
formatter.result({
  "duration": 9837060100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "CT-01 - Login com sucesso",
  "description": "",
  "id": "login-sistema-orangehrm;ct-01---login-com-sucesso",
  "type": "scenario",
  "keyword": "Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@CT-01"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "digitado \"admin\" no campo usuario, \"admin123\" no campo senha corretos",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "clicar no botão \"LOGIN\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "a pagina realiza o login",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 10
    },
    {
      "val": "admin123",
      "offset": 36
    }
  ],
  "location": "LonginOrangeSteps.digitado_no_campo_usuario_no_campo_senha_corretos(String,String)"
});
formatter.result({
  "duration": 113394300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN",
      "offset": 17
    }
  ],
  "location": "LonginOrangeSteps.clicar_no_botão(String)"
});
formatter.result({
  "duration": 1535756900,
  "status": "passed"
});
formatter.match({
  "location": "LonginOrangeSteps.a_pagina_realiza_o_login()"
});
formatter.result({
  "duration": 30055251900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#welcome\"}\n  (Session info: chrome\u003d88.0.4324.146)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DEALNOTE0155\u0027, ip: \u0027192.168.0.33\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.146, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\THIAGO~1.MAR\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:56512}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4f5b39198927f89f193ec5d03f9552d5\n*** Element info: {Using\u003did, value\u003dwelcome}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat pages.com.br.LoginOrangePage.ValidaLogin(LoginOrangePage.java:43)\r\n\tat LonginOrange.LonginOrangeSteps.a_pagina_realiza_o_login(LonginOrangeSteps.java:31)\r\n\tat ✽.Entao a pagina realiza o login(LonginOrange.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 737598800,
  "status": "passed"
});
});