# Node.js Custom Managed VM - Web Capture

這是個簡單的Node.js Custom Managed VM的範例，範例是以Web Page的快照功能為主，透過簡單的route可以快照所輸入的網頁。

## Local Run

本地端執行指需要透過node.js跑起來即可(就當express run吧...)

```
$ git pull https://github.com/gcpug-tw/mvm-nodejs-webcapture.git
$ cd mvm-nodejs-webcapture/web && npm install
$ npm start
```

跑Docker可以嗎？可以der....

```
$ cd mvm-nodejs-webcapture 
$ docker build -t gcpugtw/mvm-nodejs-webcapture .
$ docker run -it -p 8080:8080 gcpugtw/mvm-nodejs-webcapture
```

## Deployment

前提：請先準備Google Cloud Platform專案與安裝Google Cloud SDK

```
$ git pull https://github.com/gcpug-tw/mvm-nodejs-webcapture.git
$ cd mvm-nodejs-webcapture
$ gcloud preview app deploy app.yaml

or

$ ./deploy.sh
```

## Usage

本服務開在8080 port，因為MVM內部的結構，開8080比較方便...
連線: http://[your-ip-address]:8080/webshot?url=[the-url-you-want-capture]
