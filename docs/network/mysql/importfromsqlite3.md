# 从SQLite3导入

## 将单个sqlite3表导入mysql
以我的世界服务器authme插件为例

首先需要从sqlite3的db文件中导出数据为csv，如果读者还不会操作，接下来请安装SQLiteDatabaseBrowserPortable（跨平台，所有系统均可用），然后跟我一起操作

1. 打开软件后，在菜单栏选择文件，打开数据库，之后在弹出窗口中选中自己要打开的db数据库文件
2. 之后点击文件，导出，导出表到csv文件，弹出窗口中选中自己要导出的表，然后点Save，再设定保存位置和文件名，就能导出了  

之后命令行登录mysql数据库，找到或新建自己要导入的数据库

之后按照SQLiteDatabaseBrowserPortable软件显示的sqlite3中的表的各个列的数据类型，在mysql的目标数据库中创建一个同样类型的表，如果要读取该表的程序会自动创建对应的表，最好让程序创建，否则如果自己手工转换可能程序会无法识别，并且由于mysql和sqlite3的数据类型稍有不同，可能你手动转换的时候会转错

如果是程序自动创建表，记得检查一下mysql的表和sqlite3的表的顺序，很可能是不相同的，如果不同的话就会导入失败或者数据错误，如果真的不同了，可以试试笔者当时让copilot生成的python代码，里面有一些变量值记得修改  
```
import csv

def reorder_csv_columns(input_file, output_file, column_order):
    with open(input_file, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        
        # 确保CSV文件中的列都存在于column_order中
        for field in reader.fieldnames:
            if field not in column_order:
                raise ValueError(f"CSV文件中存在未在column_order中定义的列: {field}")

        with open(output_file, mode='w', newline='', encoding='utf-8') as outfile:
            writer = csv.DictWriter(outfile, fieldnames=column_order)
            writer.writeheader()
            
            for row in reader:
                reordered_row = {field: row[field] for field in column_order}
                writer.writerow(reordered_row)

# MySQL表中的列顺序
column_order = [
    #此处只按填写mysql中表的名，不需要填写列的数据类型，一定按后面例子中给出的格式进行填写否则程序不识别，比如说你的mysql中的列按顺序分别是username,password,ip,coordination，那么就写"username","password","ip","coordination"
]

# 输入文件和输出文件的路径
input_file = '输入文件的路径'
output_file = '输出文件的路径'

# 重新排序CSV文件的列
reorder_csv_columns(input_file, output_file, column_order)

print(f"转换完成，新文件保存为 {output_file}")
```
之后文件中如果有一些空的值，一定要把它们填上`\N`，比如有`minimouse48,123456,,1.2`这一行，那么就需要把它整个改成`minimouse48,123456,\N,1.2`，你可以用vscode的搜索和替换功能，搜索`,,`并替换成`,\N,`。注意如果sqlite3中最后一列是`NULL`，那么导出的时候最后一列就是一个逗号结尾，如果要搜索替换这种的，就需要在vscode中选中使用正则表达式的按钮（长成.*这个样子），之后搜索`,$`（正则表达式中`$`表达末尾），然后替换成`,\N`
