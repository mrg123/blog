# phpcms get標籤的使用

```
 {pc:get sql="SELECT * FROM phpcms_member" cache="3600" page="$page" dbsource="discuz" return="data"}
 <ul>
 {loop $data $key $val}
 {$val[username]}
 {/loop}
 </ul>
 {$pages}
 {/pc}
```

其他参数说明[^1]

| 參數     | default | 必須 | 說明                                                         |
| -------- | ------- | ---- | :----------------------------------------------------------- |
| sql      | null    | 是   | sql,執行語句                                                 |
| cache    | 0       | 否   | 緩存時間,單位秒                                              |
| page     | 0       | 否   | 分頁處理                                                     |
| dbsource | null    | 否   | 數據源，當你通過系統後臺的數據源模塊配置過數據源時，可把數據源名填寫到這裏，系統會去對應的數據源來讀取數據。如果要讀取本系統的數據請留空 |
| return   | data    | 否   | return data                                                  |



[^1]: http://www.php114.net/2011/1116/131.html "phpcms get标签"