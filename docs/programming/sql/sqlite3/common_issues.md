# 常见问题
## 怎么做到数据不存在则插入，存在则更新或不插入？
可以使用` INSERT INTO…ON CONFLICT DO UPDATE`语句。  
例如更新，具体使用方法如下：  
```sql
INSERT INTO table_name (column1, column2, ... )
VALUES (value1, value2, ... )
ON CONFLICT (column_unique_key) DO UPDATE SET column1=new_value1, column2=new_value2, ... ;
```
`INSERT INTO ... VALUES`这里和`INSERT INTO`的语法是一样的，其实就是`INSERT INTO`语句。  
`ON CONFLICT ...`会在所提供的值与表中有`UNIQUE`约束的列中数据有重复的时候（比如提供了一个值114514但主键里已经有114514了），前面的插入就不会执行，转而执行从`DO`开始后面的语句。  
比如要更新，就写UPDATE语句，像上面那样。  
如果是直接不插入，写`DO NOTHING`。
```sql
INSERT INTO table_name (column1, column2, ... )
VALUES (value1, value2, ... )
ON CONFLICT (column_unique_key) DO NOTHING
```
[原文](https://deepinout.com/sqlite/sqlite-questions/16_sqlite_insert_if_not_exists_else_update.html#google_vignette)
